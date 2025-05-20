// filepath: /C:/Users/USER/OneDrive/Desktop/Culture-frontend/src/services/apiClient.ts
import axios from "axios";
import { getToken, storeToken, removeToken } from "./authService";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/", // Base URL for your API
});

// Add a request interceptor to attach the access token
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh
apiClient.interceptors.response.use(
  (response) => response, // Pass through successful responses
  async (error) => {
    const originalRequest = error.config;

    // If the error is 401 (Unauthorized) and it's not a retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as a retry

      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        try {
          // Attempt to refresh the access token
          const response = await axios.post("http://localhost:8000/api/auth/login/refresh/", {
            refresh: refreshToken,
          });

          const newAccessToken = response.data.access;
          storeToken(newAccessToken, refreshToken); // Update the stored tokens

          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          removeToken(); // Clear tokens if refresh fails
          window.location.href = "/"; // Redirect to login page
        }
      } else {
        console.error("No refresh token available. Please log in again.");
        removeToken();
        window.location.href = "/"; // Redirect to login page
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;