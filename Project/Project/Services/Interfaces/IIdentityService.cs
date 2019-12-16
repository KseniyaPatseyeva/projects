using System.Threading.Tasks;
using Models;

namespace Project.Services.Interfaces
{
    public interface IIdentityService
    {
        Task<User> GetUser(string userName);
    }
}