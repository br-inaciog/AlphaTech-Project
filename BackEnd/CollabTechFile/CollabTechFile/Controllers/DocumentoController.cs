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

    public class DocumentoController : ControllerBase
    {

        private readonly IDocumentoRepository _DocumentoRepository;

        public DocumentoController(IDocumentoRepository documentoRepository)
        {
            _DocumentoRepository = documentoRepository;
        }

        [HttpGet]

        public IActionResult Get() {
            try
            {
                List<Documento> listarDocumentos = _DocumentoRepository.Listar();
                return Ok(listarDocumentos);
            }
            catch (Exception)
            {
                throw;
            }

        }

        [HttpPost]

        public IActionResult Post(Documento documento)
        {

            try
            {
                _DocumentoRepository.Cadastrar(documento);
                return StatusCode(201, documento);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpDelete("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                _DocumentoRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpPut("{id}")]

        public IActionResult Put(Guid id, Documento documento)
        {

            try
            {
                _DocumentoRepository.Editar(id, documento);
                return NoContent();

            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }


    }

}

