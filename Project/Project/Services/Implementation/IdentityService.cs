using System.Threading.Tasks;
using DBRepository.Interfaces;
using Models;
using Project.Services.Interfaces;

namespace Project.Services.Implementation
{
    public class IdentityService : IIdentityService
    {
        private IIdentityRepository _repository;

        public IdentityService(IIdentityRepository repository)
        {
            _repository = repository;
        }

        public async Task<User> GetUser(string userName)
        {
            return await _repository.GetUser(userName);
        }

    }
}