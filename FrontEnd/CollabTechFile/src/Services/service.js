import axios from "axios";

// Porta local da sua API (.NET) — confirme no launchSettings.json
const apiPorta = "5173";

// Base da API local (HTTPS para evitar redirect do preflight)
const baseURL = `https://localhost:${apiPorta}/api/`;

// Instância do Axios configurada
const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export default api;
