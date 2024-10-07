// favoriteCompanyThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FavoriteCompanyServices } from '../api/undex';
import { FavoriteCompany } from '.';
import { AxiosError } from 'axios';

type RejectValue = {
    message: string;
} ;

export const getFavoriteCompanies = createAsyncThunk<
FavoriteCompany[],
    void,
    { rejectValue: RejectValue }
>(
    'favoriteCompanies/getFavorite',
    async (_, { rejectWithValue }) => {
        try {
            const response = await FavoriteCompanyServices.getFavoriteCompanies();
            console.log(response);
            
            return response;
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue({
                message: err.response?.data.message || err.message,
            });
        }
    }
);

export const addFavoriteCompany = createAsyncThunk(
    'favoriteCompanies/addFavorite',
    async ({ userId, companyId }: { userId: number; companyId: number }) => {
        const response = await FavoriteCompanyServices.addFavoriteCompany(userId, companyId);
        return response;
    }
);

export const deleteFavoriteCompany = createAsyncThunk(
    'favoriteCompanies/deleteFavorite',
    async ({ userId, companyId }: { userId: number; companyId: number }) => {
        await FavoriteCompanyServices.deleteFavoriteCompany(userId, companyId);
        return { userId, companyId };
    }
);
