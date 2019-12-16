using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using DBRepository.Interfaces;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using Project.Helpers;
using Project.Services.Interfaces;
using Project.ViewModels;
using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;

namespace Project.Services.Implementation
{
    public class ParkingService : IParkingService
    {
        private IParkingRepository _repository;
        private IConfiguration _config;
        private IMapper _mapper;

        public ParkingService(IParkingRepository repository, IConfiguration configuration, IMapper mapper)
        {
            _repository = repository;
            _config = configuration;
            _mapper = mapper;
        }

        public async Task AddCar(AddCarRequest request)
        {
            var car = _mapper.Map<AddCarRequest, Car>(request);
            await _repository.AddCar(car);
        }

        public async Task<Page<CarMessageViewModel>> GetCars(int pageIndex)
        {
            var pageSize = _config.GetValue<int>("pageSize");
            var page = await _repository.GetCars(pageIndex, pageSize);
            var result = _mapper.ToMappedPage<Car, CarMessageViewModel>(page);
            return result;
        }
    }
}