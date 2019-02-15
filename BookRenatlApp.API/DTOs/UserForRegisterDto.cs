using System.ComponentModel.DataAnnotations;

namespace BookRenatlApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName {get;set;}
        
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="the password in between 8 and 4 characters")]
        public string password {get;set;}
    }
}