import axios from "axios";

<<<<<<< HEAD
const apiPorta = "7142";
const apiLocal = `https://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: apiLocal
=======
// Porta local da sua API (.NET)
const apiPortaHttps = "7142"; // confirme no launchSettings.json

// Base da API local (HTTPS para evitar redirect do preflight)
const baseURL = `https://localhost:${apiPortaHttps}/api/`;

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
>>>>>>> 379c678523b6cc748e1fe2568e31d7f56b3162b8
});

export default api;