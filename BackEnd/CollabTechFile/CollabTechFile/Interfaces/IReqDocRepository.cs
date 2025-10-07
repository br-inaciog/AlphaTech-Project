using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IReqDocRepository
    {
        void Cadastrar(ReqDoc reqDoc);
        void Deletar(int id);
        void Editar(int id, ReqDoc reqDoc);
<<<<<<< HEAD
        List<ReqDoc> Listar();
=======
>>>>>>> 7a9fd435835e081278a61e7344176e5a61a676d1
    }
}
