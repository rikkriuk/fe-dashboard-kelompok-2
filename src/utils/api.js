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

// about-us
const getAboutUsData = () => api.get("/api/about-us");
const postAboutUsData = (data) => apiWithToken.post("/api/about-us", data);
const putAboutUsData = (id, data) =>
  apiWithToken.put(`/api/about-us/${id}`, data);

// what-we-do
const getWhatWeDoData = () => api.get("/api/what-we-do");
const postWhatWeDoData = (data) => apiWithToken.post("/api/what-we-do", data);
const putWhatWeDoData = (data, id) =>
  apiWithToken.put(`/api/what-we-do/${id}`, data);
const deleteWhatWeDoData = (id) => apiWithToken.delete(`/api/what-we-do/${id}`);

// teams
const getTeamsData = () => api.get("/api/team");
const postTeamsData = (data) => apiWithToken.post("/api/team", data);
const putTeamsData = (data, id) => apiWithToken.put(`/api/team/${id}`, data);
const deleteTeamsData = (id) => apiWithToken.delete(`/api/team/${id}`);

// article
const getArticleData = () => api.get("/api/article");
const getArticleDataById = (slug) => api.get(`/api/article/${slug}`);
const postArticleData = (data) => apiWithToken.post("/api/article", data);
const putArticleData = (data, id) =>
  apiWithToken.put(`/api/article/${id}`, data);
const deleteArticleData = (id) => apiWithToken.delete(`/api/article/${id}`);

// contact
const getContactData = () => apiWithToken("/api/contact");

// subscribe email
const getSubscribeEmail = () => apiWithToken("/api/subscribe");

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
  getArticleData,
  postArticleData,
  getArticleDataById,
  putArticleData,
  deleteArticleData,
  getContactData,
  getSubscribeEmail,
  getTeamsData,
  postTeamsData,
  putTeamsData,
  deleteTeamsData,
  getWhatWeDoData,
  postWhatWeDoData,
  putWhatWeDoData,
  deleteWhatWeDoData,
  getAboutUsData,
  postAboutUsData,
  putAboutUsData,
};
