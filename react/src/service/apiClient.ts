import axios from "axios";
export  const BS_BASE_URL = "http://localhost:3000/api";
  // remove string type
export const apiClient = axios.create({
    baseURL: BS_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})


export const apiClient2 = axios.create({
    baseURL: BS_BASE_URL,
    headers: {
        "Content-Type": "application/json",

    },
})
apiClient2.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    const cleanToken = token ? token.replace(/"/g, "") : "";
    if (cleanToken) {
        config.headers["Authorization"] = `Bearer ${cleanToken}`;
    }
    return config;
});


export default {apiClient,apiClient2};