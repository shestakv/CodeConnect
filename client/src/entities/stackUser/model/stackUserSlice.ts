import { createSlice } from "@reduxjs/toolkit";
import { StackUser } from ".";
import {
  createStackUser,
  deleteStackUser,
  getAllStackUsers,
  getStackUserById,
  updateStackUser,
} from "./stackUserThunks";

type StackUserState = {
  stackUser: StackUser | null;
  stackUsers: StackUser[];
  error: string | null;
  loading: boolean;
};

const initialState: StackUserState = {
  stackUser: null,
  stackUsers: [],
  error: null,
  loading: false,
};

const stackUserSlice = createSlice({
  name: "stackUser",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStackUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllStackUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.stackUsers = action.payload.stackUsers;
        state.error = null;
      })
      .addCase(getAllStackUsers.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getStackUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStackUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.stackUser = action.payload.stackUser;
        state.error = null;
      })
      .addCase(getStackUserById.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createStackUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStackUser.fulfilled, (state, action) => {
        state.loading = false;
        state.stackUsers.push(action.payload.stackUser);
        state.error = null;
      })
      .addCase(createStackUser.rejected, (state) => {
        state.loading = false;
      })

      .addCase(updateStackUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStackUser.fulfilled, (state, action) => {
        state.loading = false;
        state.stackUsers = state.stackUsers.map((stackUser) =>
          stackUser.id === action.payload.stackUser.id
            ? action.payload.stackUser
            : stackUser
        );
        state.error = null;
      })
      .addCase(updateStackUser.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteStackUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStackUser.fulfilled, (state, action) => {
        state.loading = false;
        state.stackUsers = state.stackUsers.filter(
          (stackUser) => stackUser.id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteStackUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default stackUserSlice.reducer;
