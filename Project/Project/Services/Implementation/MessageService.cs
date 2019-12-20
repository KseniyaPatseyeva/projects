using System.Threading.Tasks;
using AutoMapper;
using DBRepository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Models;
using Project.Services.Interfaces;

namespace Project.Services.Implementation
{
    public class MessageService : IMessageService
    {
        readonly IParkingRepository _repository;
        readonly IConfiguration _config;

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
    }
}
