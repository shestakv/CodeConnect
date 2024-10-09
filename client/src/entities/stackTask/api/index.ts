import { axiosInstance } from "@/shared/lib/axiosInstance";
import { CheckAnswer, CheckAnswerResponse } from "../model";

export class StackTaskService {
  static async checkAnswer({ answer, id }: CheckAnswerResponse): Promise<CheckAnswer> {
    try {
      const response = await axiosInstance.post(`/stackTasks`, { answer, id });
      return response.data;
    } catch (error) {
      console.error("Error fetching all userStacks:", error);
      throw new Error("Failed to fetch userStacks.");
    }
  }
}
