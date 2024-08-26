import axios, { InternalAxiosRequestConfig } from "axios";

const Api = axios.create({
    baseURL: "https://restcountries.com",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
});

Api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    let token = localStorage.getItem("access_token");
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default Api;