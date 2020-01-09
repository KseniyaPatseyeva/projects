using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Models;
using Models.DbModels;

namespace DBRepository.Interfaces
{
    public interface IParkingRepository
    {
        Task<IEnumerable<Message>> GetMessages(int index, int pageSize);

        Task<IEnumerable<DataRecord>> GetStats(DateTime start, DateTime end, bool isArrived);

        Task<int> GetCount();

        Task<int> GetCount(bool isArrived);
    }
}