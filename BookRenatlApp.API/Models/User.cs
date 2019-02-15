using Microsoft.AspNetCore.Identity;

namespace BookRenatlApp.API.Models
{
    public class User : IdentityUser<int>
    {
         public int Id {get;set;}

        public string UserName {get;set;}

        public byte[] PasswordHash {get;set;}

        public byte[] Passwordsalt {get;set;}

        public Icollection<UserRole> UserRoles {get;set;}
    }
}