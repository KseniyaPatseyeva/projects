using System.Collections.Generic;
using System.Threading.Tasks;
using Models;
using Models.DbModels;

namespace Project.Services.Interfaces
{
    public interface IMessageService
    {
        Task<Page<Message>> GetMessages(int pageIndex);

        Task<IEnumerable<StatData>> GetStats(string start, string end);

        Task<int> GetCount();
    }
}