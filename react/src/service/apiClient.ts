import axios from "axios";
export  const BS_BASE_URL = "http://localhost:3000/api";

export const apiClient = axios.create({
    baseURL: BS_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})


const apiClient2 = axios.create({
    baseURL: BS_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
})


export default {apiClient,apiClient2};