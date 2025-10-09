using System.Text.RegularExpressions;
using CollabTechFile.DbContextCollab;
using CollabTechFile.Interfaces;
using CollabTechFile.Models;

namespace CollabTechFile.Repositories
{
    public class RegrasDocRepository : IRegrasDocRepository
    {
        public readonly CollabTechFileContext _context;
        public RegrasDocRepository(CollabTechFileContext context)
        {
            _context = context;
        }
        
        public void Cadastrar(RegrasDoc regrasDoc)
        {
            try
            {
                _context.RegrasDocs.Add(regrasDoc);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Deletar(int id)
        {
            try
            {
                RegrasDoc regraBuscada = _context.RegrasDocs.Find(id)!;
                if (regraBuscada != null)
                {
                    _context.RegrasDocs.Remove(regraBuscada);
                }
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Editar(int id, RegrasDoc regrasDoc)
        {
            try
            {
                RegrasDoc regraBuscada = _context.RegrasDocs.Find(id)!;
                if (regraBuscada != null)
                {
                    regraBuscada.IdRegras = regrasDoc.IdRegrasDoc;
                }
                _context.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        List<RegrasDoc> IRegrasDocRepository.Listar()
        {
            try
            {
                List<RegrasDoc> listaRegrasDoc = _context.RegrasDocs.ToList();
                return listaRegrasDoc;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
