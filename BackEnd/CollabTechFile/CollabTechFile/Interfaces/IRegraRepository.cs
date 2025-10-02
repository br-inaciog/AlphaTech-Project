using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IRegraRepository
    {
        void Cadastrar(Regra regra);
        void Deletar(Guid id);
        void Editar(Guid id, Regra regra);
        List<Regra> Listar();
    }
}
