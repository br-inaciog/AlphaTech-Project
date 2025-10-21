import axios from "axios";

<<<<<<< HEAD
// Porta local da sua API (.NET)
const apiPorta = "7142"; // confirme no launchSettings.json

// Base da API local (HTTPS para evitar redirect do preflight)
const baseURL = `https://localhost:${apiPorta}/api/`;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
const apiPorta = "7142";
const apiLocal = `https://localhost:${apiPorta}/api/`;

const api = axios.create({
    baseURL: apiLocal
=======
// Porta local da sua API (.NET)
>>>>>>> 179bb5085e2ed1a4080cb29c1937f23fd3962300
const apiPortaHttps = "7142"; // confirme no launchSettings.json

const baseURL = `https://localhost:${apiPortaHttps}/api/`;
>>>>>>> 94e78eb65ab9267fce84e7efe61a1a4763181551

// Instância do Axios configurada
const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export default api;
