import { createAsyncThunk } from "@reduxjs/toolkit";
import { CompanyId, CompanyResponse } from ".";
import { AxiosError } from "axios";
import { CompanyServices } from "../api";

type RejectValue = {
  message: string;
};

export const getAllCompanies = createAsyncThunk<
  CompanyResponse,
  void,
  { rejectValue: RejectValue }
>("company/getAllCompanies", async (_, { rejectWithValue }) => {
  try {
    return await CompanyServices.getAllCompanies();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const getCompanyById = createAsyncThunk<
  CompanyResponse,
  { id: number },
  { rejectValue: RejectValue }
>("company/getCompanyById", async ({ id }, { rejectWithValue }) => {
  try {
    return await CompanyServices.getCompanyById(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const createCompany = createAsyncThunk<
  CompanyResponse,
  { name: string; email: string; phone: string; description: string },
  { rejectValue: RejectValue }
>(
  "company/createCompany",
  async ({ name, email, phone }, { rejectWithValue }) => {
    try {
      return await CompanyServices.createCompany({ name, email, phone });
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const updateCompany = createAsyncThunk<
  CompanyResponse,
  {
    id: number;
    name?: string;
    email?: string;
    phone?: string;
    description?: string;
    logo?: string;
  },
  { rejectValue: RejectValue }
>(
  "company/updateCompany",
  async (
    { id, name, email, phone, description, logo },
    { rejectWithValue }
  ) => {
    try {
      return await CompanyServices.updateCompany(
        id,
        name,
        email,
        phone,
        description,
        logo
      );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({
        message: err.response?.data.message || err.message,
      });
    }
  }
);

export const deleteCompany = createAsyncThunk<
  CompanyId,
  { id: number },
  { rejectValue: RejectValue }
>("company/deleteCompany", async ({ id }, { rejectWithValue }) => {
  try {
    const deleteId = await CompanyServices.deleteCompany(id);
    return deleteId;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

export const updateCompanyLogo = createAsyncThunk<
  CompanyResponse,
  { companyData: FormData },
  { rejectValue: RejectValue }
>("company/updateCompanyLogo", async ({ companyData }, { rejectWithValue }) => {
  try {
    return await CompanyServices.updateCompanyLogo(companyData);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});
