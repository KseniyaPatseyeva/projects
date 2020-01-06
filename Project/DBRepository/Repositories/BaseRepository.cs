using DBRepository.Interfaces;

namespace DBRepository.Repositories
{
    public abstract class BaseRepository
    {
        protected BaseRepository(string connectionString, IRepositoryContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }

        protected string ConnectionString { get; }

        protected IRepositoryContextFactory ContextFactory { get; }
    }
}