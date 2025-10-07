using CollabTechFile.Interfaces;
using CollabTechFile.Models;
using CollabTechFile.DbContextCollab;
using CollabTechFile.Utils;
using Microsoft.EntityFrameworkCore;

namespace CollabTechFile.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly CollabTechFileContext _context;

        public UsuarioRepository (CollabTechFileContext context)
        {
            _context = context;
        }
        public void Cadastrar(Usuario usuario)
        {
            try
            {
                usuario.Senha = Criptografia.GerarHash(usuario.Senha!);

                _context.Usuarios.Add(usuario);

                _context.SaveChanges();
            }
            catch(Exception)
            {
                throw;
            }
        }

        public void Deletar(int id)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuarios.Find(id)!;
                if (usuarioBuscado != null)
                {
                    _context.Usuarios.Remove(usuarioBuscado);
                }
                _context.SaveChanges();
            }
            catch(Exception) 
            {
                throw;
            }
        }

        public void Editar(int id, Usuario usuario)
        {
            try
            {
                Usuario usuarioBuscado = _context.Usuarios.Find(id)!;
                if (usuarioBuscado != null)
                {
                    usuarioBuscado.IdUsuario = usuario.IdUsuario;
                }
                _context.SaveChanges(); 
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Usuario> Listar()
        {
            try
            {
                return _context.Usuarios.ToList();
            }
            catch (Exception) 
            { 
                throw;
            }
        }
    }
}
