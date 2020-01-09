using Microsoft.AspNetCore.Mvc;
using Serilog;

namespace Project.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            Log.Information("Getting page view");
            return View();
        }
    }
}