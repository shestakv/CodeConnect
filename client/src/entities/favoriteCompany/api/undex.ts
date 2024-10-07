import { axiosInstance } from "@/shared/lib/axiosInstance";
import { FavoriteCompany, FavoriteCompanyResponse } from "../model";


export class FavoriteCompanyServices {
    static async getFavoriteCompanies(): Promise<FavoriteCompanyResponse> {
        const response = await axiosInstance.get(`/favoritescompany`);
        return response.data;
    }

    static async addFavoriteCompany(userId: number, companyId: number): Promise<FavoriteCompany> {
        const response = await axiosInstance.post("/favoriteCompanies", { userId, companyId });
        return response.data;
    }

    static async deleteFavoriteCompany(userId: number, companyId: number): Promise<void> {
        await axiosInstance.delete(`/favoriteCompanies`, { data: { userId, companyId } });
    }
}