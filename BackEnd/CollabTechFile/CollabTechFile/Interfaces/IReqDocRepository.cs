using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IReqDocRepository
    {
        void Cadastrar(ReqDoc reqDoc);
        void Deletar(Guid id);
        void Editar(Guid id, ReqDoc reqDoc);
    }
}
