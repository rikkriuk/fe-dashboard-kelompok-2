import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : "";
};

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiWithToken = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: getToken(),
  },
});

// auth
const userRegister = (data) => api.post("/api/register", data);
const userLogin = (data) => api.post("/api/login", data);

// portfolio
const getPortfolio = () => api.get("/api/portfolio");
const addPortfolio = (data) => apiWithToken.post("/api/portfolio", data);
const editPortfolio = (id, data) =>
  apiWithToken.put(`/api/portfolio/${id}`, data);
const deletePortofolio = (id) => apiWithToken.delete(`/api/portfolio/${id}`);

// testimonial
const getTestimonial = () => api.get("/api/testimonials");
const addTestimonial = (data) => apiWithToken.post("/api/testimonials", data);
const editTestimonial = (id, data) =>
  apiWithToken.put(`/api/testimonials/${id}`, data);
const deleteTestimonial = (id) =>
  apiWithToken.delete(`/api/testimonials/${id}`);

export {
  userRegister,
  userLogin,
  getToken,
  getPortfolio,
  addPortfolio,
  editPortfolio,
  deletePortofolio,
  getTestimonial,
  addTestimonial,
  editTestimonial,
  deleteTestimonial,
};
