import favooriteCompanyReducer from "./model/favoriteCompanySlice";

export type { FavoriteCompany } from "./model";
export { FavoriteCompanyItem } from "./ui"; 

export { 
    getFavoriteCompanies, 
    addFavoriteCompany, 
    deleteFavoriteCompany 
} from "./model/favoriteCompanyThunks";

export { favooriteCompanyReducer }
