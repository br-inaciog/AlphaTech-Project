using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IRegrasDocRepository
    {
        void Cadastrar(RegrasDoc regrasDoc);
        void Deletar(int id);
        void Editar(int id, RegrasDoc regrasDoc);
<<<<<<< HEAD
        List<RegrasDoc> Listar();
=======

>>>>>>> 7a9fd435835e081278a61e7344176e5a61a676d1
    }
}
