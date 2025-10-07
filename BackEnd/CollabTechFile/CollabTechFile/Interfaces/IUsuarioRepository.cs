using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        List<Usuario> Listar();

        void Editar(int id, Usuario usuario);

        void Deletar(int id);
    }
}
