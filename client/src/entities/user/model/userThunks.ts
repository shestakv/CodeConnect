import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { UserServices } from "../api";
import { AuthResponse, UserResponse, UsersResponse } from ".";
import { axiosInstance } from "@/shared/lib/axiosInstance";


type RejectValue = {
  message: string;
};

export const refreshAccessToken = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: RejectValue }
>("user/refreshAccessToken", async (_, { rejectWithValue }) => {
  try {
    return await UserServices.refreshAccessToken();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signIn = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: RejectValue }
>("user/signIn", async ({ email, password }, { rejectWithValue }) => {
  try {
    return await UserServices.signIn(email, password);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const signUp = createAsyncThunk<
  AuthResponse,
  {
    firstname: string;
    surname: string;
    patronymic: string;
    phone: bigint;
    email: string;
    password: string;
  },
  { rejectValue: RejectValue }
>(
  "user/signUp",
  async (
    { firstname, surname, patronymic, phone, email, password },
    { rejectWithValue }
  ) => {
    try {
      return await UserServices.signUp(
        firstname,
        surname,
        patronymic,
        phone,
        email,
        password
      );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectValue }
>("user/logout", async (_, { rejectWithValue }) => {
  try {
    await UserServices.logout();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const updateAvatarUserOnServer = createAsyncThunk<
  AuthResponse,
  { FormData: FormData;},
  { rejectValue: RejectValue }
  
  >("user/updateUserAvatarOnServer", async ( FormData, { rejectWithValue }) => {
  try {
    
    // await axiosInstance.put('/users', userData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })

    
    return await UserServices.updateAvatarUser(FormData);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
})
export const updateUserOnServer = createAsyncThunk<
  AuthResponse,
  { FormData: FormData;},
  { rejectValue: RejectValue }
  
  >("user/updateUserOnServer", async ( FormData, { rejectWithValue }) => {
  try {
    
    // await axiosInstance.put('/users', userData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })

    
    return await UserServices.updateUser(FormData);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
})

export const getAllUsers = createAsyncThunk<
  UsersResponse,
  void,
  { rejectValue: RejectValue }
>("user/getAllUsers", async (_, { rejectWithValue }) => {
  try {
    return await UserServices.getAllUsers();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getUserById = createAsyncThunk<
  UserResponse,
  { id: number },
  { rejectValue: RejectValue }
>("user/getUserById", async ({ id }, { rejectWithValue }) => {
  try {
    return await UserServices.getUserById(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
