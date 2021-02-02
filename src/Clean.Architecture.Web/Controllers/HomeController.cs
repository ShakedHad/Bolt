using Microsoft.AspNetCore.Mvc;

namespace Clean.Architecture.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Redirect("index.html");
        }
    }
}
