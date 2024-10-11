import { axiosInstance } from "@/shared/lib/axiosInstance";
import {
  // UserStack,
  UserStackId,
  UserStackResponse,
} from "../model";

export class UserStackService {
  static async getAllUserStacks(userId: number): Promise<UserStackResponse> {
    try {
      const response = await axiosInstance.get(`/users/userStacks/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all userStacks:", error);
      throw new Error("Failed to fetch userStacks.");
    }
  }

  static async createUserStack(stackId: number): Promise<UserStackResponse> {
    try {
      const response = await axiosInstance.post("/userStacks", {
        stackId,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating userStack:", error);
      throw new Error("Failed to create userStack.");
    }
  }

  static async deleteUserStack(id: number): Promise<UserStackId> {
    try {
      await axiosInstance.delete(`/userStacks/${id}`);
      return id;
    } catch (error) {
      console.error("Error deleting userStack:", error);
      throw new Error("Failed to delete userStack.");
    }
  }

  static async updateUserStack(
    id: number,
    userId: number,
    stackId: number,
    grade: number
  ): Promise<UserStackResponse> {
    try {
      const response = await axiosInstance.put(`/userStacks/${id}`, {
        id,
        userId,
        stackId,
        grade,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating userStack:", error);
      throw new Error("Failed to update userStack.");
    }
  }
}
