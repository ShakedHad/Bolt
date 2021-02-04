using Microsoft.AspNetCore.Mvc;

namespace Bolt.Web.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseApiController : Controller
    {
    }
}
