using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CollabTechFile.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class RegraDocController : ControllerBase
    {
        private readonly IRegrasDocRepository _regrasDocRepository;
        public RegraDocController(IRegrasDocRepository regraDocRepository)
        {
            _regrasDocRepository = regraDocRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                List<RegrasDoc>listarRegras = _regrasDocRepository.Listar();
                return Ok(listarRegras);
            } catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public IActionResult Post (RegrasDoc regrasDoc)
        {
            try
            {
                _regrasDocRepository.Cadastrar(regrasDoc);
                return StatusCode(201);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (int id)
        {
            try
            {
                _regrasDocRepository.Deletar(id);
                return StatusCode(204);
            }
            catch
            {
                throw;
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, RegrasDoc regrasDoc)
        {
            try {
                _regrasDocRepository.Editar(id, regrasDoc);
                return NoContent();
            }
            catch
            {
                throw;
            }
        }

    }
}
