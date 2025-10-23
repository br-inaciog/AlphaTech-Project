using System;
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
            //_context.Usuarios.Find(documento.IdUsuario)

            _context.Documentos.Add(documento);
            _context.SaveChanges();
        }

        public void Editar(int id, Documento documento)
        {
            var doc = _context.Documentos.Find(id);
            if (doc != null)
            {
                doc.Nome = documento.Nome;
                doc.Prazo = documento.Prazo;
                doc.CaminhoArquivo = documento.CaminhoArquivo;
                _context.SaveChanges();
            }
        }

        public void Deletar(int id)
        {
            try { 
            var doc = _context.Documentos.Find(id);
            if (doc != null)
            
                _context.Documentos.Remove(doc);
                _context.SaveChanges();
            }

            catch (Exception)
            {
                throw;
            }
        }


        public List<Documento> Listar()
        {
            return _context.Documentos.ToList();
        }
    }
}
