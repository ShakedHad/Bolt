using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Bolt.Core.Entities;
using Bolt.Core.Specifications;
using Bolt.SharedKernel.Interfaces;
using Bolt.Web.ApiModels;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Bolt.Web.Api
{
    public class AuthController : BaseApiController
    {
        private readonly IConfiguration _configuration;
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public AuthController(IConfiguration configuration, IRepository repository, IMapper mapper)
        {
            _configuration = configuration;
            _repository = repository;
            _mapper = mapper;
        }

        [HttpPost("google")]
        public async Task<IActionResult> GoogleAuth([FromBody] GoogleAuthDTO auth)
        {
            try
            {
                var payload = await GoogleJsonWebSignature.ValidateAsync(auth.TokenId,
                    new GoogleJsonWebSignature.ValidationSettings()
                    {
                        Audience = new [] { _configuration.GetSection("Authentication:Google")["ClientId"] }
                    });

                var connectedUser = (await _repository.ListAsync(new UserByGoogleIdSpecification(payload.Subject))).SingleOrDefault();

                if (connectedUser is null)
                {
                    connectedUser = await _repository.AddAsync(new User()
                    {
                        FirstName = payload.GivenName,
                        LastName = payload.FamilyName,
                        GoogleId = payload.Subject,
                        ImageUrl = payload.Picture,
                        Email = payload.Email
                    });
                }

                return Ok(_mapper.Map<User, UserDTO>(connectedUser));
            }
            catch
            {
                return StatusCode(403, "Google token id isn't valid");
            }

        }
    }

    public class GoogleAuthDTO
    {
        public string TokenId { get; set; }
    }
}