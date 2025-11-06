using CollabTechFile.Models;
using CollabTechFile.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CollabTechFile.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocumentosController : ControllerBase
    {
        private readonly IDocumentoRepository _documentoRepository;

        public DocumentosController(IDocumentoRepository documentoRepository)
        {
            _documentoRepository = documentoRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var documentos = _documentoRepository.Listar()
                .Where(d => d.Status == true);

            return Ok(documentos);
        }

        [HttpGet("Lixeira")]
        public IActionResult ListarLixeira()
        {
            var documentos = _documentoRepository.Listar()
                .Where(d => d.Status == false);

            return Ok(documentos);
        }

        [HttpPut("Inativar/{id}")]
        public IActionResult Inativar(int id)
        {
            var documento = _documentoRepository.BuscarPorId(id);

            if (documento == null)
                return NotFound("Documento não encontrado.");

            documento.Status = false;

            _documentoRepository.Editar(id, documento);
            return Ok("Documento movido para a lixeira com sucesso.");
        }

        [HttpPut("Restaurar/{id}")]
        public IActionResult Restaurar(int id)
        {
            var documento = _documentoRepository.BuscarPorId(id);

            if (documento == null)
                return NotFound("Documento não encontrado.");

            documento.Status = true;

            _documentoRepository.Editar(id, documento);
            return Ok("Documento restaurado com sucesso.");
        }

        [HttpDelete("Excluir/{id}")]
        public IActionResult Excluir(int id)
        {
            var documento = _documentoRepository.BuscarPorId(id);

            if (documento == null)
                return NotFound("Documento não encontrado.");

            _documentoRepository.Deletar(id);
            return Ok("Documento excluído permanentemente.");
        }
    }
}
