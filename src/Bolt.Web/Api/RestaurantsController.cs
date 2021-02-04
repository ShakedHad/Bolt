using System.Threading.Tasks;
using Bolt.Core.Entities;
using Bolt.SharedKernel.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Bolt.Web.Api
{
    public class RestaurantsController : BaseApiController
    {
        private readonly IRepository _repository;

        public RestaurantsController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            return Ok((await _repository.ListAsync<Restaurant>()));
        }
    }
}