using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IRequisitoRepository
    {
        void Cadastrar (Requisito requisito);
        void Deletar (Guid id);
        void Editar(Guid id, Requisito requisito);
        List<Requisito> Listar ();
    }
}
