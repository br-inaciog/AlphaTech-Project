using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using Microsoft.AspNetCore.Authorization;
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

<<<<<<< HEAD
        //[Authorize]
=======
        
>>>>>>> 4cccf590bcfe61ba130ce3d6dd773935b0796c1d
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
