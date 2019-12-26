using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Models;
using Project.Services.Interfaces;

namespace Project.Services.Implementation
{
    public class MessageService : IMessageService
    {
        private readonly IParkingRepository _repository;
        private readonly IConfiguration _config;

        public MessageService(IParkingRepository repository, IConfiguration configuration)
        {
            _repository = repository;
            _config = configuration;
        }
        public async Task<ActionResult<Page<Message>>> GetMessages(int pageIndex)
        {
            var pageSize = _config.GetValue<int>("pageSize");
            return await _repository.GetMessages(pageIndex, pageSize); ;
        }

        public async Task<ActionResult<List<StatData>>> GetStats(string start, string end)
        {
            var startDateTime = Convert.ToDateTime(start);
            var endDateTime = Convert.ToDateTime(end);
            var stats = new List<StatData>
            {
                new StatData(AddEmptyData(await _repository.GetStats(startDateTime, endDateTime, true), startDateTime, endDateTime), "Arrived"),
                new StatData(AddEmptyData(await _repository.GetStats(startDateTime, endDateTime, false), startDateTime, endDateTime), "Left")
            };

            return stats;
        }
        // add record about empty days
        private List<DataRecord> AddEmptyData(List<DataRecord> data, DateTime startDateTime, DateTime endDateTime)
        {
            var result = new List<DataRecord>();
            var keys = data.Select(item => item.Key).ToList();
            foreach (var day in EachDay(startDateTime, endDateTime))
            {
                var dayStr = day.Date.ToString("d", new CultureInfo("fr-FR"));
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
        private IEnumerable<DateTime> EachDay(DateTime from, DateTime thru)
        {
            for (var day = from.Date; day.Date <= thru.Date; day = day.AddDays(1))
                yield return day;
        }
    }
}
