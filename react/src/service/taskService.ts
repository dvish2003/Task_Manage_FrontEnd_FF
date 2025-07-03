import type { Task } from "../model/Task";
import { apiClient2 } from "./apiClient";

export const addTask = async (taskData : Task | null): Promise<Task> =>{
    console.log("Task adding with taskData :",taskData)
    const response = await apiClient2.post("/task/saveTask" , taskData)
    return response.data;
}