import axios from "axios";

// Porta local da sua API (.NET)
const apiPorta = "7142"; // confirme no launchSettings.json

// Base da API local (HTTPS para evitar redirect do preflight)
const baseURL = `https://localhost:${apiPorta}/api/`;

// Instância do Axios configurada
const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export default api;
