import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { User } from "../model";

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
  password: string,
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
}
