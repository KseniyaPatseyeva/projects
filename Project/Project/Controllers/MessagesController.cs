using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DBRepository;
using Models;
using Project.Services.Implementation;
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

        [HttpGet("stats/{date}")]
        public async Task<ActionResult<int>> GetStats(string date)
        {
            DateTime day = Convert.ToDateTime(date);
            return await _service.GetStats(day, false);
        }


    }
}
