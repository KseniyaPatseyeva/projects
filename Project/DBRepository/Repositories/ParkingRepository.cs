using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
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

        public async Task<ActionResult<IEnumerable<Car>>> GetCars()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Cars.ToListAsync();
            }
        }
    }
}
