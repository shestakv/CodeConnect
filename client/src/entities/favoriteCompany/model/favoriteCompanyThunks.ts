// favoriteCompanyThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FavoriteCompanyServices } from '../api/undex';
import { FavoriteCompany } from '.';
import { AxiosError } from 'axios';

type RejectValue = {
    message: string;
};


export const getFavoriteCompanies = createAsyncThunk<
FavoriteCompany[],
    void,
    { rejectValue: RejectValue }
>(
    'favoriteCompanies/getFavorite',
    async (_, { rejectWithValue }) => {
        try {
            const response = await FavoriteCompanyServices.getFavoriteCompanies();            
            return response;
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue({
                message: err.response?.data.message || err.message,
            });
        }
    }
);

export const addFavoriteCompany = createAsyncThunk<
    FavoriteCompany,
    { userId: number; companyId: number },
    { rejectValue: RejectValue }
>(
    'favoriteCompanies/addFavorite',
    async ({ userId, companyId }, { rejectWithValue }) => {
        try {
            const response = await FavoriteCompanyServices.addFavoriteCompany(userId, companyId);
            
            return response;
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue({
                message: err.response?.data.message || err.message,
            });
        }
    }
);

export const deleteFavoriteCompany = createAsyncThunk<
    { userId: number; companyId: number },
    { userId: number; companyId: number },
    { rejectValue: RejectValue }
>(
    'favoriteCompanies/deleteFavorite',
    async ({ userId, companyId }, { rejectWithValue }) => {
        try {
            await FavoriteCompanyServices.deleteFavoriteCompany(userId, companyId);
            return { userId, companyId };
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue({
                message: err.response?.data.message || err.message,
            });
        }
    }
);
