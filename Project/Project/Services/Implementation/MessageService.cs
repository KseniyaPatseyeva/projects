using System;
using System.Collections.Generic;
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
                new StatData(await _repository.GetStats(startDateTime, endDateTime, true), "Arrived"),
                new StatData(await _repository.GetStats(startDateTime, endDateTime, false), "Left")
            };
            return stats;
        }
    }
}
