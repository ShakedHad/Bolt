using Microsoft.AspNetCore.Mvc;

namespace Bolt.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Redirect("public/index.html");
        }
    }
}
