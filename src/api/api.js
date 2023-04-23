import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API + "/api",
});

instance.interceptors.request.use(
  (request) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      if (request.headers && access_token) {
        request.headers["Authorization"] = "Bearer " + access_token;
      }
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const navigate = useNavigate();
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      navigate("/");
      toast.error("Не авторизован");
    }
    return Promise.reject(error);
  }
);

export default instance;
