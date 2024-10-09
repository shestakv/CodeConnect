import { createSlice } from "@reduxjs/toolkit";
import { UserStack } from ".";
import {
  createUserStack,
  deleteUserStack,
  getAllUserStacks,
  // getUserStackById,
  updateUserStack,
} from "./userStackThunks";

type UserStackState = {
  userStack: UserStack | null;
  userStacks: UserStack[];
  error: string | null;
  loading: boolean;
};

const initialState: UserStackState = {
  userStack: null,
  userStacks: [],
  error: null,
  loading: false,
};

const userStackSlice = createSlice({
  name: "userStack",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserStacks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUserStacks.fulfilled, (state, action) => {
        state.loading = false;
        state.userStacks = action.payload.userStacks;
        state.error = null;
      })
      .addCase(getAllUserStacks.rejected, (state) => {
        state.loading = false;
      })

      // .addCase(getUserStackById.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getUserStackById.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.userStack = action.payload.userStack;
      //   state.error = null;
      // })
      // .addCase(getUserStackById.rejected, (state) => {
      //   state.loading = false;
      // })

      .addCase(createUserStack.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserStack.fulfilled, (state, action) => {
        state.loading = false;
        
        state.userStacks.push(action.payload.userStack);
        state.error = null;
      })
      .addCase(createUserStack.rejected, (state) => {
        state.loading = false;
      })

      .addCase(updateUserStack.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserStack.fulfilled, (state, action) => {
        state.loading = false;
        state.userStacks = state.userStacks.map((userStack) =>
          userStack.id === action.payload.userStack.id
            ? action.payload.userStack
            : userStack
        );
        state.error = null;
      })
      .addCase(updateUserStack.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteUserStack.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserStack.fulfilled, (state, action) => {
        state.loading = false;
        state.userStacks = state.userStacks.filter(
          (userStack) => userStack.id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteUserStack.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userStackSlice.reducer;
