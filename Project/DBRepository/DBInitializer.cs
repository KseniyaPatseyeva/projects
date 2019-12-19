using Microsoft.EntityFrameworkCore;

namespace DBRepository
{
    public class DbInitializer
    {
        public static void Initialize(RepositoryContext context)
        {
            context.Database.Migrate();
        }
    }
}
