import axios from "axios";
import { store } from "../../redux/app/store";
import { BASE_URL } from "../baseurl";
import { refreshAccessToken } from "../auth/apiMethod";
import { loginSuccess, logout } from "../../redux/slice/UserAuthSlice";
import { toast } from "react-toastify";

export const api = axios.create({
  withCredentials: true,
  baseURL: `${BASE_URL}/`,
});

api.interceptors.request.use(
  async (config) => {
    const state = store.getState();
    const authToken = state.user?.token;

    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const state = store.getState();
        const authRefreshToken = state.user?.refreshToken;


        const response = await refreshAccessToken(authRefreshToken);
    

        if (response.token) {
          store.dispatch(loginSuccess({ user: response }));

          const updatedState = store.getState();
          originalRequest.headers["Authorization"] = `Bearer ${updatedState.user?.token}`;
          
          return api(originalRequest);
        } else {
          throw new Error("Failed to refresh token");
        }
      } catch (refreshError) {
       
        toast.error('Session expired. Please log in again.');
        store.dispatch(logout());
        
        return Promise.reject(refreshError); 
      }
    }

    return Promise.reject(error);  
  }
);
