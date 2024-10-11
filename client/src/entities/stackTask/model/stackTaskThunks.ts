import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { StackTaskService } from "../api";
import { CheckAnswer, CheckAnswerResponse } from ".";

type RejectValue = {
  message: string;
};

export const checkAnswer = createAsyncThunk<
  CheckAnswer,
  CheckAnswerResponse,
  { rejectValue: RejectValue }
>("company/getAllStackTasks", async ({ answer, id, testingResultId }, { rejectWithValue }) => {
  try {
    return await StackTaskService.checkAnswer({ answer, id, testingResultId });
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
