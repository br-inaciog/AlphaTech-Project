import axios from "axios";

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

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
>>>>>>> 379c678523b6cc748e1fe2568e31d7f56b3162b8
});

export default api;