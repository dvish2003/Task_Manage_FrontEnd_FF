import type {User} from "../model/User.ts";
import {apiClient, apiClient2} from "./apiClient.ts";

export const addUser = async (userData: User | null): Promise<User> =>{  // must return user data type
    console.log("Adding user with data:", userData);
    const response = await apiClient.post("/users/register", userData);
    return response.data;
}

export const loginUser = async (userData :User | null): Promise<string> => {   // must return string data type
    const response = await apiClient.post("/users/login", userData);
    return response.data.message;

}

export const getUser = async (userData : User | null): Promise<User> => {   // must return user data type
    console.log("user with data:", userData);
    const response = await apiClient2.post("/users/getUser", userData);
    return response.data.message;
}

