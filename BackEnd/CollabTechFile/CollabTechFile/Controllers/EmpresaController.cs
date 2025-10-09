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

    public class EmpresaController : ControllerBase
    {
        private readonly IEmpresaRepository _EmpresaRepository;

        public EmpresaController(IEmpresaRepository empresaRepository)
        {
            _EmpresaRepository = empresaRepository;
        }

        [HttpPost]

        public IActionResult Post(Empresa empresa)
        {

            try
            {
                _EmpresaRepository.Cadastrar(empresa);
                return StatusCode(201, empresa);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                _EmpresaRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                List<Empresa> listarEmpresas = _EmpresaRepository.Listar();
                return Ok(listarEmpresas);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
