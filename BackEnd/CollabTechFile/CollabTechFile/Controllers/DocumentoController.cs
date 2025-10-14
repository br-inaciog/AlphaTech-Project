using CollabTechFile.Models;
using CollabTechFile.Interfaces;
using CollabTechFile.Services;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;
using CollabTechFile.DTO;
using CollabTechFile.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace CollabTechFile.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class DocumentosController : ControllerBase
    {
        private readonly IDocumentoRepository _documentoRepository;
        private readonly OCRService _ocrService;
        private readonly IConfiguration _configuration;

        public DocumentosController(
            IDocumentoRepository documentoRepository,
            OCRService ocrService,
            IConfiguration configuration)
        {
            _documentoRepository = documentoRepository;
            _ocrService = ocrService;
            _configuration = configuration;
        }

        [Authorize]
        [HttpPost("upload-ocr")]
        public async Task<IActionResult> UploadOCR([FromForm] UploadOCRRequest request)
        {
            if (request.Arquivo == null || request.Arquivo.Length == 0)
                return BadRequest("Nenhum arquivo enviado.");

            try
            {
                var pastaBase = _configuration["DocumentSettings:PastaDocumentos"];
                if (!Directory.Exists(pastaBase))
                    Directory.CreateDirectory(pastaBase);

                var caminhoArquivo = Path.Combine(pastaBase, request.Arquivo.FileName);

                using (var stream = new FileStream(caminhoArquivo, FileMode.Create))
                {
                    await request.Arquivo.CopyToAsync(stream);
                }

                request.documento.CaminhoArquivo = caminhoArquivo;

                string modelId = "prebuilt-document";
                var camposExtraidos = await _ocrService.ExtrairCamposAsync(caminhoArquivo, modelId);

                if (request.documento.Comentarios == null)
                    request.documento.Comentarios = new List<Comentario>();

                foreach (var campo in camposExtraidos)
                {
                    var texto = $"{campo.Key}: {campo.Value}";
                    if (texto.Length > 500) texto = texto.Substring(0, 500);

                    request.documento.Comentarios.Add(new Comentario
                    {
                        Texto = texto
                    });
                }

                if (string.IsNullOrWhiteSpace(request.documento.Nome))
                    return BadRequest("O campo 'Titulo' do documento é obrigatório.");

                // 7️⃣ Validar FK se houver (exemplo: UsuarioId)
                // if (!_usuarioRepository.Exists(request.documento.UsuarioId))
                //     return BadRequest("Usuário relacionado não existe.");

                // 8️⃣ Salvar documento no banco com tratamento de erros
                try
                {
                    _documentoRepository.Cadastrar(request.documento);
                }
                catch (Exception dbEx)
                {
                    var mensagemErro = dbEx.InnerException != null ? dbEx.InnerException.Message : dbEx.Message;
                    return StatusCode(500, $"Erro ao salvar no banco: {mensagemErro}");
                }

                return StatusCode(201, request.documento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao processar documento: {ex.Message}");
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                List<Documento> listarDocumentos = _documentoRepository.Listar();
                return Ok(listarDocumentos);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

}

