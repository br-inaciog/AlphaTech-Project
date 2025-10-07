using CollabTechFile.Models;
using CollabTechFile.Interfaces;
using CollabTechFile.Services;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

namespace CollabTechFile.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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

        [HttpPost("upload-ocr")]
        public async Task<IActionResult> UploadOCR([FromForm] Documento documento, [FromForm] IFormFile arquivo)
        {
            if (arquivo == null || arquivo.Length == 0)
                return BadRequest("Nenhum arquivo enviado.");

            try
            {
                // 1️⃣ Pasta de documentos do appsettings
                var pastaBase = _configuration["DocumentSettings:PastaDocumentos"];
                if (!Directory.Exists(pastaBase))
                    Directory.CreateDirectory(pastaBase);

                var caminhoArquivo = Path.Combine(pastaBase, arquivo.FileName);

                // 2️⃣ Salvar arquivo localmente
                using (var stream = new FileStream(caminhoArquivo, FileMode.Create))
                {
                    await arquivo.CopyToAsync(stream);
                }

                documento.CaminhoArquivo = caminhoArquivo;

                // 3️⃣ Extrair dados via OCR
                string modelId = "8113f4ea-2ff8-458b-a9ae-57226dee93e5"; // ou "prebuilt-document"
                var camposExtraidos = await _ocrService.ExtrairCamposAsync(caminhoArquivo, modelId);

                // 4️⃣ Salvar campos extraídos como comentários
                foreach (var campo in camposExtraidos)
                {
                    documento.Comentarios.Add(new Comentario
                    {
                        Texto = $"{campo.Key}: {campo.Value}"
                    });
                }

                // 5️⃣ Salvar documento no banco
                _documentoRepository.Cadastrar(documento);

                return StatusCode(201, documento);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao processar documento: {ex.Message}");
            }
        }
    }
}
