using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BookRenatlApp.API.Data;
using BookRenatlApp.API.DTOs;
using BookRenatlApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace BookRenatlApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepositroy _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepositroy repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> register(UserForRegisterDto userforrgstr) {

            userforrgstr.UserName = userforrgstr.UserName.ToLower();
            if(await _repo.UserExists(userforrgstr.UserName))
            return BadRequest("UserName is Already Exsists");

            var UserToCreate = new User {
                UserName = userforrgstr.UserName
            };

            var createduser = await _repo.Register(UserToCreate,userforrgstr.password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto) 
        {
          var usefromrepo =  await _repo.Login(userForLoginDto.UserName.ToLower(), userForLoginDto.Password);

          if(usefromrepo == null) {
              return Unauthorized();
          }

         var Claims = new[] 
         {
             new Claim(ClaimTypes.NameIdentifier, usefromrepo.Id.ToString()),
             new Claim(ClaimTypes.Name, usefromrepo.UserName),
         };

         var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

         var crdets = new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

         var tokendescripator = new SecurityTokenDescriptor
         {
             Subject = new ClaimsIdentity(Claims),
             Expires = DateTime.Now.AddDays(1),
             SigningCredentials = crdets,
         };

         var tokenhandler = new JwtSecurityTokenHandler();

            var token =  tokenhandler.CreateToken(tokendescripator);

            return Ok(new {
                token = tokenhandler.WriteToken(token)
            });
        }
    }
}