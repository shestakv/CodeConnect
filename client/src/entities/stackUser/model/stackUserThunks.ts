import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { StackUserService } from "../api";
import { StackUserId, StackUserResponse } from ".";

type RejectValue = {
  message: string;
};

export const getAllStackUsers = createAsyncThunk<
  StackUserResponse,
  void,
  { rejectValue: RejectValue }
>("company/getAllStackUsers", async (_, { rejectWithValue }) => {
  try {
    return await StackUserService.getAllStackUsers();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getStackUserById = createAsyncThunk<
  StackUserResponse,
  { id: number },
  { rejectValue: RejectValue }
>("company/getStackUserById", async ({ id }, { rejectWithValue }) => {
  try {
    return await StackUserService.getStackUserById(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createStackUser = createAsyncThunk<
  StackUserResponse,
  {
    userId: number;
    stackId: number;
    grade: number;
  },
  { rejectValue: RejectValue }
>(
  "company/createStackUser",
  async ({ userId, stackId, grade }, { rejectWithValue }) => {
    try {
      return await StackUserService.createStackUser(userId, stackId, grade);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const updateStackUser = createAsyncThunk<
  StackUserResponse,
  {
    id: number;
    userId: number;
    stackId: number;
    grade: number;
  },
  { rejectValue: RejectValue }
>(
  "company/updateStackUser",
  async ({ id, userId, stackId, grade }, { rejectWithValue }) => {
    try {
      return await StackUserService.updateStackUser(id, userId, stackId, grade);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const deleteStackUser = createAsyncThunk<
  StackUserId,
  { id: number },
  { rejectValue: RejectValue }
>("company/deleteStackUser", async ({ id }, { rejectWithValue }) => {
  try {
    const deleteId = await StackUserService.deleteStackUser(id);
    return deleteId;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
