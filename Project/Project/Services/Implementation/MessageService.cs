using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Models;
using Models.DbModels;
using Project.Services.Interfaces;

namespace Project.Services.Implementation
{
    public class MessageService : IMessageService
    {
        private readonly IParkingRepository _repository;
        private readonly AppConfiguration _config;

        public MessageService(IParkingRepository repository, AppConfiguration configuration)
        {
            _repository = repository;
            _config = configuration;
        }

        public async Task<int> GetFreePlaces()
        {
            return await _repository.GetFreePlaces(1);
            var totalPlaces = await _repository.GetCount();
            var arrived = await _repository.GetCount(true);
            var left = await _repository.GetCount(false);
            return totalPlaces - arrived + left;
        }

        public async Task<Page<Message>> GetMessages(int pageIndex)
        {
            var result = new Page<Message>
            {
                PageSize = _config.TablePageSize,
                CurrentPage = pageIndex,
                TotalPages = await _repository.GetCount(),
                Records = await _repository.GetMessages(pageIndex - 1, _config.TablePageSize)
            };

            return result;
        }

        // stats
        public async Task<IEnumerable<StatData>> GetStats(string start, string end)
        {
            var startDateTime = Convert.ToDateTime(start);
            var endDateTime = Convert.ToDateTime(end);
            var stats = new List<StatData>
            {
                new StatData(
                    AddEmptyData(
                        await _repository.GetStats(startDateTime, endDateTime, true),
                        startDateTime,
                        endDateTime), "Arrived"),
                new StatData(
                    AddEmptyData(
                        await _repository.GetStats(startDateTime, endDateTime, false),
                        startDateTime,
                        endDateTime), "Left")
            };

            return stats;
        }

        // add record about empty days
        private IEnumerable<DataRecord> AddEmptyData(IEnumerable<DataRecord> data, DateTime startDateTime, DateTime endDateTime)
        {
            var result = new List<DataRecord>();
            var keys = data.Select(item => item.Key).ToList();
            foreach (var day in EachDay(startDateTime, endDateTime))
            {
                var dayStr = day.Date.ToString("O");
                if (keys.Contains(dayStr))
                {
                    result.Add(data.First(item => item.Key == dayStr));
                }
                else
                {
                    result.Add(new DataRecord(dayStr, 0));
                }
            }

            return result;
        }

        // day enumerator
        private static IEnumerable<DateTime> EachDay(DateTime from, DateTime thru)
        {
            for (var day = from.Date; day.Date <= thru.Date; day = day.AddDays(1))
            {
                yield return day;
            }
        }
    }
}