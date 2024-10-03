export type Company = {
    id: number;
    userId: number;
    name: string;
    email: string;
    phone: string;
    description: string;
    logo: string;
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