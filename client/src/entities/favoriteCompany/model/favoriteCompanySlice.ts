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
                console.log(action.payload);
        
                state.favoriteCompanies = action.payload;
                state.error = null;
            })
            .addCase(getFavoriteCompanies.rejected, (state) => {
                state.loading = false;
            })

            .addCase(addFavoriteCompany.fulfilled, (state, action) => {
                state.favoriteCompanies.push(action.payload);
            })
            .addCase(deleteFavoriteCompany.fulfilled, (state, action) => {
                state.favoriteCompanies = state.favoriteCompanies.filter(
                    favorite => favorite.companyId !== action.payload.companyId
                );
            });
    },
});

export default favoriteCompanySlice.reducer;
