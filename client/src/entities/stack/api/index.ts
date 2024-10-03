import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Stack } from "../model";

export class StackService {
    static async getStack(stackId: number): Promise<Stack> {
        try {
            const { data } = await axiosInstance.get(`/stacks/${stackId}`);
            return data.data;
        } catch (error) {
            console.error('Error getting all themes:', error);
            throw new Error('Failed to get all themes');
        }

    }
}