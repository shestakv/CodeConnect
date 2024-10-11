import companyReducer from "./model/companySlice";

export { CompanyServices } from "./api";
export type { Company } from "./model";
export { CompanyItem } from "./ui";
export {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
} from "./model/comapnyThunks";
export { companyReducer };