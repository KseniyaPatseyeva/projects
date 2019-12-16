using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.interfaces
{
    public interface IAllCars
    {
        IEnumerable<Car> Cars {get;}
        Car GetObjCar(int id);
    }
}
