using CollabTechFile.DbContextCollab;
using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using CollabTechFile.Utils;

namespace CollabTechFile.Repositories
{
    public class SuporteRepository : ISuporteRepository
    {

        private readonly CollabTechFileContext _context;

        public SuporteRepository(CollabTechFileContext context)
        {
            _context = context;
        }
    

        public void Cadastrar(Suporte suporte)
        {
            try
            {
                _context.Suportes.Add(suporte);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Suporte> Listar()
        {
            try
            {
                List<Suporte> listarSuporte = _context.Suportes.ToList();
                return listarSuporte;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
