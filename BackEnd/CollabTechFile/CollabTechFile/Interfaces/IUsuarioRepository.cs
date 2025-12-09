using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        List<Usuario> Listar();

        void Editar(int id, Usuario usuario);

<<<<<<< HEAD
        Usuario BuscarPorId(int id);
=======
        Usuario BuscarPorId(Usuario IdUsuario, int id);
>>>>>>> b4057c42bb6d03e0812a9307fa0abab8c69125f3

        Usuario BuscarPorEmailESenha(string email, string senha);

        Usuario BuscarPorEmail(string email);


        //void Deletar(int id);
    }
}