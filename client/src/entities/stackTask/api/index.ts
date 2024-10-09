import { axiosInstance } from "@/shared/lib/axiosInstance";
import { CheckAnswer, CheckAnswerResponse } from "../model";

export class StackTaskService {
  static async checkAnswer({ answer, id, testingResultId }: CheckAnswerResponse): Promise<CheckAnswer> {
    try {
      const response = await axiosInstance.post(`/stackTasks`, { answer, id, testingResultId });
      return response.data;
    } catch (error) {
      console.error("Error fetching all userStacks:", error);
      throw new Error("Failed to fetch userStacks.");
    }
  }
}
