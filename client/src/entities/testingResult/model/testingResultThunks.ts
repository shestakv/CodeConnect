import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { UserStackService } from "../api";
import { UserStackId, UserStackResponse } from ".";

type RejectValue = {
  message: string;
};

export const testingResultThunks = createAsyncThunk<
  UserStackResponse,
  { userId: number },
  { rejectValue: RejectValue }
>("company/getAllUserStacks", async ({ userId }, { rejectWithValue }) => {
  try {
    return await UserStackService.getAllUserStacks(userId);
  
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

// export const getUserStackById = createAsyncThunk<
//   UserStackResponse,
//   { id: number },
//   { rejectValue: RejectValue }
// >("company/getUserStackById", async ({ id }, { rejectWithValue }) => {
//   try {
//     return await UserStackService.getUserStackById(id);
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return rejectWithValue({
//       message: err.response?.data.message || err.message,
//     });
//   }
// });

export const createUserStack = createAsyncThunk<
  UserStackResponse,
  {
    userId: number;
    stackId: number;
    grade: number;
  },
  { rejectValue: RejectValue }
>(
  "company/createUserStack",
  async ({ userId, stackId, grade }, { rejectWithValue }) => {
    try {
      return await UserStackService.createUserStack(userId, stackId, grade);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const updateUserStack = createAsyncThunk<
  UserStackResponse,
  {
    id: number;
    userId: number;
    stackId: number;
    grade: number;
  },
  { rejectValue: RejectValue }
>(
  "company/updateUserStack",
  async ({ id, userId, stackId, grade }, { rejectWithValue }) => {
    try {
      return await UserStackService.updateUserStack(id, userId, stackId, grade);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const deleteUserStack = createAsyncThunk<
  UserStackId,
  { id: number },
  { rejectValue: RejectValue }
>("company/deleteUserStack", async ({ id }, { rejectWithValue }) => {
  try {
    const deleteId = await UserStackService.deleteUserStack(id);
    return deleteId;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
