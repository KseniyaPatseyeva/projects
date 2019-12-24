using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DBRepository.Repositories;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace DBRepository.Interfaces
{
    public interface IParkingRepository
    {
        Task<Page<Message>> GetMessages(int index, int pageSize);
        Task<List<DataRecord>> GetStats(DateTime start, DateTime end, bool isArrived);
    }
}