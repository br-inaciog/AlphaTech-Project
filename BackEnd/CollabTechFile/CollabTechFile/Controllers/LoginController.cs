using CollabTechFile.DTO;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using CollabTechFile.Models;
using CollabTechFile.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace CollabTechFile.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _UsuarioRepository;
        public LoginController(IUsuarioRepository usuarioRepository)
        {
            _UsuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public IActionResult Login(LoginDTO loginDTO)
        {
            try
            {

                Usuario usuarioBuscado = _UsuarioRepository.BuscarPorEmailESenha(loginDTO.Email, loginDTO.Senha);

                if (usuarioBuscado == null)
                {
                    return NotFound("Usuario não cadastrado!");
                }
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado?.IdUsuario.ToString() ?? string.Empty),
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado?.Email ?? string.Empty),
                    new Claim(JwtRegisteredClaimNames.Name, usuarioBuscado?.Nome ?? string.Empty),
                    new Claim("Tipo do usuario", usuarioBuscado?.IdTipoUsuarioNavigation?.TituloTipoUsuario ?? "Desconhecido")
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("collab-tech-file-chave-autenticacao"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    issuer: "CollabTechFile.WebApi",
                    audience: "CollabTechFile.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: creds
                );
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
