import { axiosInstance } from "@/shared/lib/axiosInstance";
import {
  StackUser,
  StackUserId,
  StackUserResponse,
} from "../model";

export class StackUserService {
  static async getStackUser(stackUserId: number): Promise<StackUser> {
    try {
      const { data } = await axiosInstance.get(`/stackUsers/${stackUserId}`);
      return data.data;
    } catch (error) {
      console.error("Error getting all themes:", error);
      throw new Error("Failed to get all themes");
    }
  }

  static async getAllStackUsers(): Promise<StackUserResponse> {
    try {
      const response = await axiosInstance.get("/stackUsers");
      return response.data.stackUsers;
    } catch (error) {
      console.error("Error fetching all stackUsers:", error);
      throw new Error("Failed to fetch stackUsers.");
    }
  }

  static async getStackUserById(id: number): Promise<StackUserResponse> {
    try {
      const response = await axiosInstance.get(`/stackUsers/${id}`);
      return response.data.stackUser;
    } catch (error) {
      console.error("Error fetching stackUser:", error);
      throw new Error("Failed to fetch stackUser.");
    }
  }

  static async createStackUser(
    userId: number,
    stackId: number,
    grade: number
  ): Promise<StackUserResponse> {
    try {
      const response = await axiosInstance.post("/stackUsers", {
        userId,
        stackId,
        grade,
      });
      return response.data.stackUser;
    } catch (error) {
      console.error("Error creating stackUser:", error);
      throw new Error("Failed to create stackUser.");
    }
  }

  static async deleteStackUser(id: number): Promise<StackUserId> {
    try {
      await axiosInstance.delete(`/stackUsers/${id}`);
      return id;
    } catch (error) {
      console.error("Error deleting stackUser:", error);
      throw new Error("Failed to delete stackUser.");
    }
  }

  static async updateStackUser(
    id: number,
    userId: number,
    stackId: number,
    grade: number
  ): Promise<StackUserResponse> {
    try {
      const response = await axiosInstance.put(`/stackUsers/${id}`, {
        id,
        userId,
        stackId,
        grade,
      });
      console.log(response.data.stackUser);
      return response.data.stackUser;
    } catch (error) {
      console.error("Error updating stackUser:", error);
      throw new Error("Failed to update stackUser.");
    }
  }
}
