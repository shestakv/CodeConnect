import { axiosInstance } from "@/shared/lib/axiosInstance";
import { FavoriteCompany } from "../model";
//123456

export class FavoriteCompanyServices {
    static async getFavoriteCompanies(): Promise<FavoriteCompany[]> {
        const response = await axiosInstance.get(`/favoritescompany`);
        return response.data;
    }

    static async addFavoriteCompany(userId: number, companyId: number): Promise<FavoriteCompany> {
        const response = await axiosInstance.post("/favoritescompany", { userId, companyId });
        // console.log(response);
        return response.data;
    }

    static async deleteFavoriteCompany(userId: number, companyId: number): Promise<void> {
        await axiosInstance.delete(`/favoritescompany`, { data: { userId, companyId } });
    }
}