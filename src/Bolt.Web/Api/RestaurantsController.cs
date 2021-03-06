﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Bolt.Core.Entities;
using Bolt.Core.Specifications;
using Bolt.SharedKernel.Interfaces;
using Bolt.Web.ApiModels;
using Microsoft.AspNetCore.Mvc;

namespace Bolt.Web.Api
{
    public class RestaurantsController : BaseApiController
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public RestaurantsController(IRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            var items = _mapper.Map<List<Restaurant>, List<RestaurantDTO>>(await _repository.ListAsync<Restaurant>());
            return Ok(items);
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var item = _mapper.Map<Restaurant, RestaurantDTO>((await _repository.ListAsync(new RestaurantWithMenuByIdSpecification(id))).Single());
            if (item is null) return NotFound();
            return Ok(item);
        }
    }
}