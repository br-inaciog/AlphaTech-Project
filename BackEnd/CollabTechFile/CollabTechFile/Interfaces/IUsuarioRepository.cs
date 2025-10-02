using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        List<Usuario> Listar();

        void Editar(Guid id, Usuario usuario);

        void Deletar(Guid id);
    }
}
