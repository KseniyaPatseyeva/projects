using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using DBRepository.Factories;
using DBRepository.Interfaces;
using DBRepository.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Project.Services.Implementation;
using Project.Services.Interfaces;

namespace Project
{
    public class Startup
    {
        public Microsoft.Extensions.Configuration.IConfiguration Configuration { get; }

        public Startup(Microsoft.Extensions.Configuration.IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Startup));
            services.AddMvc(options => options.EnableEndpointRouting = false);

            services.AddScoped<IRepositoryContextFactory, RepositoryContextFactory>();
            services.AddScoped<IParkingRepository>(provider =>
                new ParkingRepository(Configuration.GetConnectionString("DefaultConnection"),
                    provider.GetService<IRepositoryContextFactory>()));
            services.AddSingleton(Configuration);
            services.AddScoped<IParkingService, ParkingService>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                routes.MapRoute(
                    name: "DefaultApi",
                    template: "api/{controller}/{action}/{id?}");
                routes.MapSpaFallbackRoute("spa-fallback", new {controller = "Home", action = "Index"});
            });
        }
    }
}