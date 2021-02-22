using System.Collections.Generic;
using System.Threading.Tasks;
using Bolt.Core.Entities;
using Bolt.Web.ApiModels;
using Microsoft.AspNetCore.Mvc;

namespace Bolt.Web.Api
{
    public class AuthController : BaseApiController
    {
        [HttpGet("google")]
        public async Task<IActionResult> GoogleAuth([FromBody] GoogleAuthDTO auth)
        {
            // TODO: implement token check

            return Ok();
        }
    }

    public class GoogleAuthDTO
    {
        public string TokenId { get; set; }
    }
}