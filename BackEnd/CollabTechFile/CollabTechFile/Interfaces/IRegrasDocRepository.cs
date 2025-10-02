using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IRegrasDocRepository
    {
        void Cadastrar(RegrasDoc regrasDoc);
        void Deletar(Guid id);
        void Editar(Guid id, RegrasDoc regrasDoc);

    }
}
