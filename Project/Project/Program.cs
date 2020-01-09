using System.IO;
using DBRepository;
using DBRepository.Interfaces;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");
            var config = builder.Build();

            // db factory
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var factory = services.GetRequiredService<IRepositoryContextFactory>();
                var context = factory.CreateDbContext(config.GetConnectionString("DefaultConnection"));
                DbInitializer.Initialize(context);
            }

            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(builder => builder.AddJsonFile("appsettings.json"))
                .UseStartup<Startup>()
                .Build();
    }
}