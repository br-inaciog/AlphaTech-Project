using CollabTechFile.DbContextCollab;
using CollabTechFile.Interfaces;
using CollabTechFile.Models;

namespace CollabTechFile.Repositories
{
    public class DocumentoRepository : IDocumentoRepository
    {
        private readonly CollabTechFileContext _context;
        public DocumentoRepository(CollabTechFileContext context)
        {
            _context = context;
        }
        public void Cadastrar(Documento documento)
        {
            try
            {
                _context.Documentos.Add(documento);
                _context.SaveChanges();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                Documento documentoBuscado = _context.Documentos.Find(id)!;
                if (documentoBuscado != null)
                {
                    _context.Documentos.Remove(documentoBuscado);
                }
                _context.SaveChanges();
            }
            catch (Exception) 
            {
                throw;
            }
        }

        public void Editar(Guid id, Documento documento)
        {
            try
            {
                Documento documentoBuscado = _context.Documentos.Find(id)!;
                if(documentoBuscado != null)
                {
                    documentoBuscado.Status = documento.Status;
                }
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Documento> Listar()
        {
            try
            {
                List<Documento> listaDocumentos = _context.Documentos.ToList();
                return listaDocumentos;
            }
            catch
            {
                throw;
            }
        }
    }
}
