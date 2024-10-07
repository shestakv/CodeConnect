import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { StackService } from "../api";
import { Stack } from ".";

type RejectValue = {
    message: string
}

export const getStack = createAsyncThunk<
    Stack,
    {stackId: number},
    { rejectValue: RejectValue }
>('stacks/getStack', async ({stackId}, { rejectWithValue }) => {
    try {
        return await StackService.getStack(stackId)
    } catch (error) {
        const err = error as AxiosError<{message: string}>
        return rejectWithValue({
            message: err.response?.data.message || err.message
        })
    }
})