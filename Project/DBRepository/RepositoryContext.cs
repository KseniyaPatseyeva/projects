﻿using Models;
using Microsoft.EntityFrameworkCore;

namespace DBRepository
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Car> Cars { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(u => u.Login).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Password).IsRequired();
        }
    }
}