using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.DbModels;
using Project.Services.Interfaces;
using Serilog;

namespace Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MessagesController
    {
        private readonly IMessageService _service;

        public MessagesController(IMessageService service)
        {
            _service = service;
        }

        // GET: Messages
        [HttpGet]
        public async Task<ActionResult<Page<Message>>> GetMessages()
        {
            Log.Information("Get request to table page 1");
            return await _service.GetMessages(1);
        }

        // GET: api/Messages/page/5
        [HttpGet("page/{id}")]
        public async Task<ActionResult<Page<Message>>> GetMessage(int id)
        {
            Log.Information("Get request to table page {0}", id);
            return await _service.GetMessages(id);
        }

        [HttpGet("stats/{start}/{end}")]
        public async Task<ActionResult<List<StatData>>> GetStats(string start, string end)
        {
            Log.Information("Get request to stats from {0} to {1}", start, end);
            var enumer = await _service.GetStats(start, end);
            return enumer.ToList();
        }

        [HttpGet("count/")]
        public async Task<ActionResult<int>> GetCount()
        {
            Log.Information("Get request to free places count");
            return await _service.GetFreePlaces();
        }
    }
}