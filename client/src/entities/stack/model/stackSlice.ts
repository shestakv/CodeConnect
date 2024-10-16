import { createSlice } from "@reduxjs/toolkit";
import { Stack } from ".";
import { getAllStacks } from "./stackThunks";

type StackState = {
  stack: Stack | null;
  stacks: Stack[] | null;
  error: string | null;
  loading: boolean;
};

const initialState: StackState = {
  stack: null,
  stacks: [],
  error: null,
  loading: false,
};

const stackSlice = createSlice({
  name: "stack",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStacks.pending, (state) => {
        state.loading = true;
      })
.addCase(getAllStacks.fulfilled, (state, action) => {
  state.loading = false;
  if (Array.isArray(action.payload)) {
    state.stacks = action.payload;
  } else {
    console.error('Invalid payload:', action.payload);
  }
  state.error = null;
})
      .addCase(getAllStacks.rejected, (state) => {
        state.loading = false
      })
  },
});

export default stackSlice.reducer