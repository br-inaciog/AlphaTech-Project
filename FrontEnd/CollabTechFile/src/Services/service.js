import axios from "axios";

// Porta local da sua API (.NET)
const apiPortaHttps = "7142"; // confirme no launchSettings.json

// Base da API local (HTTPS para evitar redirect do preflight)
const baseURL = `https://localhost:${apiPortaHttps}/api/`;

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export default api;