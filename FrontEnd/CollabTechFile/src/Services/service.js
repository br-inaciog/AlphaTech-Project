import axios from "axios";

<<<<<<< HEAD
// Porta local da sua API (.NET)
const apiPorta = "7142"; // confirme no launchSettings.json
=======
// Porta local da sua API (.NET) — confirme no launchSettings.json
const apiPorta = "5173";
>>>>>>> d633ae39ba321622f942159d2a2670b9f0229a30

// Base da API local (HTTPS para evitar redirect do preflight)
const baseURL = `https://localhost:${apiPorta}/api/`;

// Instância do Axios configurada
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
