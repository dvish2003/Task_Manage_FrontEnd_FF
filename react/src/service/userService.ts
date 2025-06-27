import type {User} from "../model/User.ts";
import {apiClient} from "./apiClient.ts";

export const addUser = async (userData: User | null): Promise<User> =>{
    console.log("Adding user with data:", userData);
    const response = await apiClient.post("/users/register", userData);
    return response.data;
}

export const loginUser = async (userData :User | null): Promise<User> => {
    const response = await apiClient.post("/users/login", userData);
    return response.data.message;

}

