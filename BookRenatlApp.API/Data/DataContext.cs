using BookRenatlApp.API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BookRenatlApp.API.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, 
    IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
    
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Value> values {get;set;}

        public DbSet<Genre> geners {get;set;}

        public DbSet<Book> books {get;set;}

      

     protected override void OnModelCreating(ModelBuilder builder) 
     {
         base.OnModelCreating(builder);
         
         builder.Entity<UserRole>(userrole => {

             userrole.HasKey(ur => new {ur.UserId, ur.RoleId});

             userrole.HasOne(ur => ur.role)
                    .WithMany(ur => ur.UserRoles)
                    .HasForeignKey(ur =>ur.RoleId)
                    .IsRequired();

            userrole.HasOne(ur => ur.user)
                        .WithMany(ur => ur.UserRoles)
                        .HasForeignKey(ur => ur.UserId)
                        .IsRequired();
         });
     }

    }

    
}