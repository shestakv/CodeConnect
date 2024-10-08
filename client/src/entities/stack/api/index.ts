import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Stack } from "../model";

export class StackService {
    static async getAllStacks(): Promise<Stack> {
        try {
            const { data } = await axiosInstance.get(`/stacks`);
            console.log(data.stacks, 11111111111);
            
            return data.stacks;
        } catch (error) {
            console.error('Error getting all themes:', error);
            throw new Error('Failed to get all themes');
        }
    }
}