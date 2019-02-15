namespace BookRenatlApp.API.Models
{
    public class UserRole: IdentityUserRole
    {
        public User user {get;set;}

        public Role role {get;set;}
    }
}