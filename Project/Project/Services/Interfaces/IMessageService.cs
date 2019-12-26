using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.DbModels;

namespace Project.Services.Interfaces
{
    public interface IMessageService
    {
        Task<ActionResult<Page<Message>>> GetMessages(int pageIndex);
        Task<ActionResult<List<StatData>>> GetStats(string start, string end);
        Task<ActionResult<int>> GetCount();
    }
}