using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository.Repositories
{
    class ParkingRepository : BaseRepository, IParkingRepository
    {
        public ParkingRepository(string connectionString, IRepositoryContextFactory contextFactory)
            : base(connectionString, contextFactory)
        {
        }

        public async Task<Page<Car>> GetCars(int index, int pageSize)
        {
            var result = new Page<Car> { CurrentPage = index, PageSize = pageSize };
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                result.TotalPages = await context.Cars.CountAsync();
                result.Records = await context.Cars.ToListAsync();

            }
            return result;
        }

        public async Task AddCar(Car car)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Cars.Add(car);
                await context.SaveChangesAsync();
            }
        }
    }
}
