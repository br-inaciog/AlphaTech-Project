using CollabTechFile.Models;

namespace CollabTechFile.Interfaces


{
    public interface ISuporteRepository
    {
        void Cadastrar (Suporte suporte);

        List<Suporte> Listar();

    }
}
