using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IDocumentoRepository
    {
        void Cadastrar(Documento documento);
        void Editar(Guid id, Documento documento);
        void Delete(Guid id);
        List<Documento> Listar();

    }
}
