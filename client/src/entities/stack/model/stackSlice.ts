import { createSlice } from "@reduxjs/toolkit";
import { Stack } from ".";
import { getStack } from "./stackThunks";

type StackState = {
  stack: Stack |null;
  error: string | null;
  loading: boolean;
};

const initialState: StackState = {
  stack: null,
  error: null,
  loading: false,
};

const stackSlice = createSlice({
  name: "stack",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStack.fulfilled, (state, action) => {
        state.loading = false;
        state.stack = action.payload;
        state.error = null;
      })
      .addCase(getStack.rejected, (state) => {
        state.loading = false
      })
  },
});

export default stackSlice.reducer