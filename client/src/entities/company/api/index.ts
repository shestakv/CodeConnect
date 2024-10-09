import { axiosInstance } from "@/shared/lib/axiosInstance";
import { CompanyEmail, CompanyId, CompanyResponse, CompanyWithoutIdAndUserIdAndLogoAndDescription } from "../model";



export class CompanyServices {
    static async getAllCompanies(): Promise<CompanyResponse> {
        const response = await axiosInstance.get("/companies");
        return response.data;
    }

    static async getCompanyByEmail(email: string): Promise<CompanyEmail> {
        const response = await axiosInstance.get(`/companies`, {
            params: { email }
        });
        return response.data;
    }

    static async createCompany({  name, email, phone }: CompanyWithoutIdAndUserIdAndLogoAndDescription): Promise<CompanyResponse> {
        if (!email) {
            throw new Error("Email не может быть пустым.");
        }     
        const uniqueEmail = await this.getCompanyByEmail( email );
        if (!uniqueEmail) {
            throw new Error("Email уже занят. Пожалуйста, используйте другой email.") 
        }   
        const response = await axiosInstance.post("/companies",{  name, email, phone });
        return response.data;
    }

    static async updateCompany( id: number, name?:string, email?:string, phone?:string, description?:string, logo?:string ): Promise<CompanyResponse> {
        try{
        const response = await axiosInstance.put(`/companies/${id}`, { name, email, phone, description, logo });
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