import axios from "axios";
import { toast } from "react-toastify";
import { decryptObject } from "../utils/authEncrypt";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = import.meta.env.VITE_APP_API_URL;
const _axios = axios.create({
  baseURL: API_URL,
});

const middleware = _axios.interceptors;

function requestMiddleware(config) {
  const authUser = localStorage.getItem("_authuser");
  const decryptAuth = authUser ? decryptObject(authUser) : {};
  const AuthUser = decryptAuth;
//   if (!AuthUser.hasOwnProperty("token")) {
//     throw new Error("Bad Request errors");
//   }
  const token = AuthUser?.token;
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  config.headers["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups";
  return config;
}

middleware.response.use(
  (response) => response,
  (error) => {

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        // Handle 400 Bad Request errors
        toast.error("Bad Request errors: 400");
      } else if (status === 401 || status === 404) {
        // Handle 401 Unauthorized errors
        toast.error(data?.message);
      } else {
        // Handle other error status codes here
        toast.error("An error occurred. Please try again later.");
      }
      return Promise.reject(error);
    } else {
      toast.error("Network error. Please check your internet connection.");
    }
    return Promise.reject(error);
  }
);

middleware.request.use(requestMiddleware, function (error) {
  return Promise.reject(error);
});

export default _axios;
