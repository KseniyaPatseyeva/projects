using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using Models.DbModels;

namespace DBRepository.Repositories
{
    public class ParkingRepository : BaseRepository, IParkingRepository
    {
        private const int ParkingId = 1;

        public ParkingRepository(string connectionString, IRepositoryContextFactory contextFactory)
            : base(connectionString, contextFactory)
        {
        }

        public async Task<IEnumerable<Message>> GetMessages(int index, int pageSize)
        {
            IEnumerable<Message> records;
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                records = await context.Messages
                    .Where(message => message.ParkingId == ParkingId)
                    .OrderByDescending(c => c.CreatedDateTime)
                    .Skip(index * pageSize)
                    .Take(pageSize)
                    .ToArrayAsync();
            }

            return records;
        }

        public async Task<IEnumerable<DataRecord>> GetStats(DateTime start, DateTime end, bool isArrived)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = await context.Messages
                    .Where(message => message.ParkingId == ParkingId)
                    .Where(c => c.CreatedDateTime.Date >= start.Date && c.CreatedDateTime.Date <= end.Date &&
                                c.IsArrived == isArrived)
                    .OrderBy(c => c.CreatedDateTime)
                    .GroupBy(x => x.CreatedDateTime.Date)
                    .Select(x => new DataRecord(x.Key.Date.ToString("O"), x.Count()))
                    .ToListAsync();

                return query;
            }
        }

        public async Task<int> GetCount(bool isArrived)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var arrivedCount = await context.Messages
                    .Where(message => message.ParkingId == ParkingId)
                    .Where(message => message.IsArrived == isArrived)
                    .CountAsync();
                return arrivedCount;
            }
        }

        public async Task<int> GetCount()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = await context.Parkings
                    .FirstAsync(parking => parking.Id == ParkingId);
                return query.Places;
            }
        }
    }
}