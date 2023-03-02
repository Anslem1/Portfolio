import axios from "axios";
import { API } from "./urlConfig";
import { authConstants } from "../constant";
import store from "../store";

const token = localStorage.getItem("token");
const axioInstance = axios.create({
     baseURL: API,
     headers: { Authorization: token ? `Bearer ${token}` : "" },
});

axioInstance.interceptors.request.use((req) => {
     const { auth } = store.getState();
     if (auth.token) {
          req.headers.Authorization = `Bearer ${auth.token}`;
     }
     return req;
});

axioInstance.interceptors.response.use(
     (res) => {
          return res;
     },
     async (error) => {
          console.log({ error });

          return Promise.reject(error);
     }
);

export default axioInstance;
