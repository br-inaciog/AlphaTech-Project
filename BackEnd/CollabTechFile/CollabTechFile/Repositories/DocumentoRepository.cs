using System;
using System.Linq;
using System.Collections.Generic;
using CollabTechFile.DbContextCollab;
using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using Microsoft.EntityFrameworkCore;

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
            _context.Documentos.Add(documento);
            _context.SaveChanges();
        }

        public void Editar(int id, Documento documento)
        {
            var doc = _context.Documentos.Find(id);

            if (doc != null)
            {
                doc.Nome = documento.Nome ?? doc.Nome;
                doc.Prazo = documento.Prazo ?? doc.Prazo;
                doc.CaminhoArquivo = documento.CaminhoArquivo ?? doc.CaminhoArquivo;

                doc.Status = documento.Status;

                _context.SaveChanges();
            }
        }

        public void Deletar(int id)
        {
            var doc = _context.Documentos.Find(id);
            if (doc != null)
            {
                _context.Documentos.Remove(doc);
                _context.SaveChanges();
            }
        }

        public List<Documento> Listar()
        {
            return _context.Documentos
                .Include(d => d.IdUsuarioNavigation) 
                .ToList();
        }

        public Documento BuscarPorId(int id)
        {
            return _context.Documentos.FirstOrDefault(x => x.IdDocumento == id);
        }

        //public Documento BuscarPorId(int id)
        //{
        //    return _context.Documentos.FirstOrDefault(x => x.IdDocumento == id);
        //}
    }
}
