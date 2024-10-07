// favoriteCompanySlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteCompanies, addFavoriteCompany, deleteFavoriteCompany } from './favoriteCompanyThunks';
import { FavoriteCompany } from './index';

type FavoriteCompanyState = {
    favoriteCompanies: FavoriteCompany[];
    loading: boolean;
    error: string | null;
}

const initialState: FavoriteCompanyState = {
    favoriteCompanies: [],
    loading: false,
    error: null,
};

export const favoriteCompanySlice = createSlice({
    name: 'favoriteCompanies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFavoriteCompanies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFavoriteCompanies.fulfilled, (state, action) => {
                state.loading = false;
                state.favoriteCompanies = action.payload;
                state.error = null;
            })
            .addCase(getFavoriteCompanies.rejected, (state) => {
                state.loading = false;
            })
            
            .addCase(addFavoriteCompany.pending, (state) => {
                state.loading = true;
            })
            .addCase(addFavoriteCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.favoriteCompanies.push(action.payload);
                state.error = null;
            })
            .addCase(addFavoriteCompany.rejected, (state) => {
                state.loading = false;
            })
            
            .addCase(deleteFavoriteCompany.fulfilled, (state, action) => {
                state.favoriteCompanies = state.favoriteCompanies.filter(
                    favorite => favorite.companyId !== action.payload.companyId
                );
            });
    },
});

export default favoriteCompanySlice.reducer;
