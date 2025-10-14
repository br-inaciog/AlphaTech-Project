using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CollabTechFile.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class SuporteController : ControllerBase
    {

        private readonly ISuporteRepository _SuporteRepository;

        public SuporteController(ISuporteRepository suporteRepository)
        {
            _SuporteRepository = suporteRepository;
        }

        [HttpPost]
        public IActionResult Post(Suporte suporte)
        {

            try
            {
                _SuporteRepository.Cadastrar(suporte);
                return StatusCode(201, suporte);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
