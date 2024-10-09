import { createSlice } from "@reduxjs/toolkit";
import { Company } from ".";
import { createCompany, deleteCompany, getAllCompanies, getCompanyById, updateCompany, updateCompanyLogo } from "./comapnyThunks";


type CompanyState = {
    company: Company | null;
    companies: Company[] ;
    loading: boolean;
    error: string | null;
};

const initialState: CompanyState = {
    company: null,
    companies: [],
    loading: false,
    error: null,
};


export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCompanies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllCompanies.fulfilled, (state, action) => {
                state.loading = false;
                state.companies = action.payload.companies;
                state.error = null;
            })
            .addCase(getAllCompanies.rejected, (state) => {
                state.loading = false;
            })

            .addCase(getCompanyById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCompanyById.fulfilled, (state, action) => {
                state.loading = false;
                state.company = action.payload.company;
                state.error = null;
            })
            .addCase(getCompanyById.rejected, (state) => {
                state.loading = false;
            })

            .addCase(createCompany.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.companies.push(action.payload.company);
                state.error = null;
            })
            .addCase(createCompany.rejected, (state) => {
                state.loading = false;
            })

            .addCase(updateCompany.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.companies = state.companies.map((company) => company.id === action.payload.company.id ? action.payload.company : company);
                state.error = null;
            })
            .addCase(updateCompany.rejected, (state) => {
                state.loading = false;
            })

            .addCase(deleteCompany.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.companies = state.companies.filter((company) => company.id !== action.payload);
                state.error = null;
            })
            .addCase(deleteCompany.rejected, (state) => {
                state.loading = false;
            })
            .addCase(updateCompanyLogo.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCompanyLogo.fulfilled, (state, action) => {
                state.loading = false;
                state.company = action.payload as unknown as Company;
                state.error = null;
              })
            .addCase(updateCompanyLogo.rejected, (state) => {
                state.loading = false;
            })
    },
});

export default companySlice.reducer;