using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace BookRenatlApp.API.Models
{
    public class User : IdentityUser<int>
    {
        public string Firstname {get;set;}

        public string Lastname {get;set;}

        public DateTime DateofBirth {get;set;}

        public string Password {get;set;}

        public string ConformPassword {get;set;}


        public ICollection<UserRole> UserRoles {get;set;}
    }
}