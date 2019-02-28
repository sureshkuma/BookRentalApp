using Microsoft.AspNetCore.Identity;

namespace BookRenatlApp.API.Models
{
    public class UserRole: IdentityUserRole<int>
    {
        public User user {get;set;}

        public Role role {get;set;}
    }
}