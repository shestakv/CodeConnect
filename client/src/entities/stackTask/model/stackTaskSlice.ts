import { createSlice } from "@reduxjs/toolkit";
import { CheckAnswer } from ".";
import {
  checkAnswer,
} from "./stackTaskThunks";

type StackTaskState = {
  checkAnswerResult: CheckAnswer | null;
  error: string | null;
  loading: boolean;
};

const initialState: StackTaskState = {
  checkAnswerResult: null,
  error: null,
  loading: false,
};

const stackTaskSlice = createSlice({
  name: "stackTask",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAnswer.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.checkAnswerResult = action.payload;
        state.error = null;
      })
      .addCase(checkAnswer.rejected, (state) => {
        state.loading = false;
      })
  },
});

export default stackTaskSlice.reducer;
