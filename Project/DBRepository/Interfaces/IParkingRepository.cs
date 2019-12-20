using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace DBRepository.Interfaces
{
    public interface IParkingRepository
    {
        Task<Page<Message>> GetMessages(int index, int pageSize);
    }
}