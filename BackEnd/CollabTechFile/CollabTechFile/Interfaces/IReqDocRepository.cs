using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IReqDocRepository
    {
        void Cadastrar(ReqDoc reqDoc);
        void Deletar(int id);
        void Editar(int id, ReqDoc reqDoc);
        List<ReqDoc> Listar();
<<<<<<< HEAD


=======
>>>>>>> fd7c70dbbafa64cfbcca2c28c5adab270868f74f
    }
}
