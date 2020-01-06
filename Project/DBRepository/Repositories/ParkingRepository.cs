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
        public ParkingRepository(string connectionString, IRepositoryContextFactory contextFactory)
            : base(connectionString, contextFactory)
        {
        }

        public async Task<Page<Message>> GetMessages(int index, int pageSize)
        {
            var result = new Page<Message> { CurrentPage = index, PageSize = pageSize };
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

        public async Task<List<DataRecord>> GetStats(DateTime start, DateTime end, bool isArrived)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = await context.Messages
                    .Where(c => c.CreatedDateTime.Date >= start.Date && c.CreatedDateTime.Date <= end.Date &&
                                c.IsArrived == isArrived)
                    .OrderBy(c => c.CreatedDateTime)
                    .GroupBy(x => x.CreatedDateTime.Date)
                    .Select(x => new DataRecord(x.Key.Date.ToString("O"), x.Count()))
                    .ToListAsync();

                return query;
            }
        }

        public async Task<int> GetFreePlaces(int parkingId)
        {
            int totalPlaces, messagesArrived, messagesLeft;
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                totalPlaces = context.Parkings.FirstOrDefault(parking => parking.Id == parkingId).Places;
                messagesArrived = await context.Messages
                    .Where(message => message.ParkingId == parkingId && message.IsArrived).CountAsync();
                messagesLeft = await context.Messages
                    .Where(message => message.ParkingId == parkingId && !message.IsArrived).CountAsync();
            }

            return totalPlaces - messagesArrived + messagesLeft;
        }
    }
}