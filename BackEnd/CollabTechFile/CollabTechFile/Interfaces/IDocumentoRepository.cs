using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IDocumentoRepository
    {
        void Cadastrar(Documento documento);
        void Editar(int id, Documento documento);
        void Deletar(int id);
        List<Documento> Listar();

    }
}
