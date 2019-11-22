using Microsoft.AspNetCore.Mvc;
using Project.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Controllers
{
    public class CarsController : Controller
    {
        private readonly IAllCars _allCars;
        public CarsController(IAllCars iAllCars) => _allCars = iAllCars;
    }
}
