using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DBRepository.Repositories
{
    public class ParkingRepository : BaseRepository, IParkingRepository
    {
        public ParkingRepository(string connectionString, IRepositoryContextFactory contextFactory)
            : base(connectionString, contextFactory)
        {
        }

        public async Task<Page<Car>> GetCars(int index, int pageSize)
        {
            var result = new Page<Car>() { CurrentPage = index, PageSize = pageSize };

            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Cars.AsQueryable();

                result.TotalPages = await query.CountAsync();
                result.Records = await query.OrderByDescending(car => car.ArrivedTime).Skip(index * pageSize).Take(pageSize).ToListAsync();
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
