using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.DbModels;
using Project.Services.Interfaces;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController
    {
        private readonly IMessageService _service;

        public MessagesController(IMessageService service)
        {
            _service = service;
        }

        // GET: api/Messages
        [HttpGet]
        public async Task<ActionResult<Page<Message>>> GetMessages()
        {
            return await _service.GetMessages(0);
        }

        // GET: api/Messages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Page<Message>>> GetMessage(int id = 0)
        {
            return await _service.GetMessages(id);
        }

        [HttpGet("stats/{start}/{end}")]
        public async Task<ActionResult<List<StatData>>> GetStats(string start, string end)
        {
            return await _service.GetStats(start, end);
        }

        [HttpGet("count/")]
        public async Task<ActionResult<int>> GetCount()
        {
            return await _service.GetCount();
        }

    }
}