export interface ClientCompany {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  description: string | undefined;
  logo: string | undefined;
}




export interface Company extends ClientCompany  {
    id: number;
    userId: number;
  }
  
  export type CompanyId = Company["id"]

  export type CompanyResponse = {
    company: Company;
    message: string;
    companies: Company[];
  };

  export type CompanyWithoutId = Omit<Company, "id">
  export type CompanyWithoutUserId = Omit<Company, "userId">
  export type CompanyWithoutIdAndUserId = Omit<Company, "id" | "userId">