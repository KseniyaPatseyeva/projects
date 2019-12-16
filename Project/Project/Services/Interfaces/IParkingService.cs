using System.Threading.Tasks;
using Models;
using Project.ViewModels;

namespace Project.Services.Interfaces
{
    public interface IParkingService
    {
        Task<Page<CarMessageViewModel>> GetCars(int pageIndex);
        Task AddCar(AddCarRequest request);
    }
}