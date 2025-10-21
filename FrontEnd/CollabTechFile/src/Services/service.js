import axios from "axios";

// Porta local da sua API (.NET)
const apiPorta = "5173";
const baseURL = `https://localhost:${apiPorta}/api/`;

const api = axios.create({
  baseURL,
});

export default api;
