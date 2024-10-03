import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Company, CompanyId, CompanyResponse, CompanyWithoutIdAndUserId } from "../model";



export class CompanyServices {
    static async getAllCompanies(): Promise<CompanyResponse> {
        const response = await axiosInstance.get("/companies");
        return response.data;
    }

    static async createCompany({  name, email, phone, description, logo }: CompanyWithoutIdAndUserId): Promise<CompanyResponse> {        
        const response = await axiosInstance.post("/companies",{  name, email, phone, description, logo });
        console.log(response.data);
        
        return response.data;

    }

    static async updateCompany( id: number, name:string, email:string, phone:string, description:string, logo:string ): Promise<Company> {
        try{
        const response = await axiosInstance.put(`/companies/${id}`, { name, email, phone, description, logo });
        console.log(response.data);
        return response.data;
        } catch (error) {
            console.error("Error updating company:", error);
            throw new Error("Failed to update company.");
        }
    }

    static async deleteCompany(id: number): Promise<CompanyId> {
        try{
        await axiosInstance.delete(`/companies/${id}`);
        return id;
    } catch (error) {
        console.error("Error deleting company:", error);
        throw new Error("Failed to delete company.");
      }
    }

    static async getCompanyById(id: number): Promise<CompanyResponse> {
        const response = await axiosInstance.get(`/companies/${id}`);
        return response.data;
    }
}