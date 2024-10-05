import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { UserServices } from "../api";
import { AuthResponse } from ".";
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
  {  firstname: string,
  surname: string,
  patronymic: string,
  phone: bigint,
  email: string,
  password: string,},
  { rejectValue: RejectValue }
>("user/signUp", async ({  
  firstname,
  surname,
  patronymic,
  phone,
  email,
  password, }, { rejectWithValue }) => {
  try {
    return await UserServices.signUp(  firstname,
  surname,
  patronymic,
  phone,
  email,
  password,);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

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

export const updateUserOnServer = createAsyncThunk<AuthResponse, {userData: any}, { rejectValue: RejectValue }>("user/updateUserOnServer", async ({userData}, { rejectWithValue }) => {
  try {
    
    // const response = await axiosInstance.put('/user', userData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
      
    return await UserServices.updateUser(    
      userData);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
})
