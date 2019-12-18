using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace DBRepository.Interfaces
{
    public interface IParkingRepository
    {
        Task<Page<Car>> GetCars(int index, int pageSize);
        Task AddCar(Car car);
    }
}