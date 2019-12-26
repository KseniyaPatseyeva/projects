using Microsoft.EntityFrameworkCore;
using Models.DbModels;

namespace DBRepository
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {
        }

        public DbSet<Parking> Parkings { get; set; } 
        public DbSet<Message> Messages { get; set; }
    }
}