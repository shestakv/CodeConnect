import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { StackService } from "../api";
import { Stack } from ".";

type RejectValue = {
    message: string
}

export const getAllStacks = createAsyncThunk<
    Stack, 
    void,
    { rejectValue: RejectValue }
>('stacks/getStack', async (_, { rejectWithValue }) => {
    try {
        const stacks = await StackService.getAllStacks()
        console.log(stacks, 333333333);
        
        return stacks // Ensure that stacks is an array of Stack objects
    } catch (error) {
        const err = error as AxiosError<{message: string}>
        return rejectWithValue({
            message: err.response?.data.message || err.message
        })
    }
})