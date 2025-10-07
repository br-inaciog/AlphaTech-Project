using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CollabTechFile.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]

    public class ReqDocController : ControllerBase
    {
        private readonly IReqDocRepository _ReqDocRepository;

        public ReqDocController(IReqDocRepository reqDocRepository)
        {
            _ReqDocRepository = reqDocRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                List<ReqDoc> listarReqDocs = _ReqDocRepository.Listar();
                return Ok(listarReqDocs);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

}
