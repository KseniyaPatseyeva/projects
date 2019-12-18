using Microsoft.AspNetCore.Mvc;
using Models;
using Project.Services.Interfaces;
using Project.ViewModels;
using System.Threading.Tasks;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    public class ParkingController : Controller
    {
        private IParkingService _parkingService;

        public ParkingController(IParkingService parkingService)
        {
            _parkingService = parkingService;
        }

        [Route("page")]
        [HttpGet]
        public async Task<Page<CarMessageViewModel>> GetCars(int pageIndex)
        {
            return await _parkingService.GetCars(pageIndex);
        }
    }
}