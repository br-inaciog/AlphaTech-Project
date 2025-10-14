    using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using CollabTechFile.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CollabTechFile.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]

    public class RegraController : ControllerBase
    {
        private readonly IRegraRepository _RegraRepository;

        public RegraController(IRegraRepository regraRepository)
        {
            _RegraRepository = regraRepository;
        }


        [HttpGet]

        public IActionResult Get()
        {
            try
            {
                List<Regra> listarRegras = _RegraRepository.Listar();
                return Ok(listarRegras);
            }
            catch (Exception)
            {
                throw;
            }

        }

        [HttpPost]

        public IActionResult Post(Regra regra)
        {

            try
            {
                _RegraRepository.Cadastrar(regra);
                return StatusCode(201, regra);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _RegraRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }


        [HttpPut("{id}")]

        public IActionResult Put(int id, Regra regra)
        {
            try
            {
                _RegraRepository.Editar(id, regra);
                return NoContent();

            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }


    }
}
