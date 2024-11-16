import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const userRegister = (data) => api.post("/api/register", data);
const userLogin = (data) => api.post("/api/login", data);

export { userRegister, userLogin };
