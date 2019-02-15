using System.Threading.Tasks;
using BookRenatlApp.API.Models;

namespace BookRenatlApp.API.Data
{
    public interface IAuthRepositroy
    {
        Task<User> Register(User user, string password);

        Task<User> Login(string username, string password);

        Task<bool> UserExists(string username);
    }
}