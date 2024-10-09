import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { User, UserResponse, UsersResponse } from "../model";

export class UserServices {
  // * Метод для получения текущего пользователя
  static async refreshAccessToken(): Promise<{
    accessToken: string;
    user: User;
  }> {
    const response = await axiosInstance.get("/tokens/refresh");

    setAccessToken(response.data.accessToken);
    return response.data;
  }

  // * Метод для входа пользователя
  static async signIn(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post("/auth/signIn", {
      email,
      password,
    });

    setAccessToken(response.data.accessToken);
    return response.data;
  }

  // * Метод для регистрации пользователя
  static async signUp(
    firstname: string,
    surname: string,
    patronymic: string,
    phone: bigint,
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post("/auth/signUp", {
      firstname,
      surname,
      patronymic,
      phone,
      email,
      password,
    });
    setAccessToken(response.data.accessToken);
    return response.data;
  }

  // * Метод для выхода пользователя
  static async logout(): Promise<void> {
    await axiosInstance.delete("/auth/logout");
    setAccessToken("");
  }

  static async updateAvatarUser(userData: FormData) {
    const response = await axiosInstance.put(`/users/avatar`, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }

  static async updateUser(userData: object) {
    const response = await axiosInstance.put(`/users`, userData);

    return response.data;
  }

  static async getAllUsers(): Promise<UsersResponse> {
    const response = await axiosInstance.get("/users");
    return response.data;
  }

  static async getUserById(id: number): Promise<UserResponse> {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  }
}
