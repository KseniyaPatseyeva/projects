using System;
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

        public async Task<Page<Message>> GetMessages(int index, int pageSize)
        {
            var result = new Page<Message> {CurrentPage = index, PageSize = pageSize};
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Messages.AsQueryable();
                result.TotalPages = await query.CountAsync();
                result.Records = await query
                    .OrderByDescending(c => c.Id)
                    .Skip(index * pageSize)
                    .Take(pageSize)
                    .ToListAsync();
            }

            return result;
        }

        public async Task<int> GetStats(DateTime day, bool isArrived)
        {
            int result;
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Messages.AsQueryable();

                result = await query.GroupBy(c => c.IsArrived == isArrived).CountAsync();
            }

            return result;
        }
    }
}