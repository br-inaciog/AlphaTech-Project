using CollabTechFile.Models;

namespace CollabTechFile.Interfaces
{
    public interface IEmpresaRepository
    {
        void Cadastrar(Empresa empresa);
        void Deletar(int id);

    }
}
