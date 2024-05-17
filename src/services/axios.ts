import axios from "axios";
import { AppError } from "../utils/AppError";


export const api = axios.create({
    baseURL: "http://192.168.1.12:3001"
});


api.interceptors.response.use(response => response, (error) => {

    if (error.response && error.response.data) {
        const { errorMessage, statusCode } = error.response.data;
        return Promise.reject(new AppError(errorMessage, statusCode));
    } else return Promise.reject(error)
})