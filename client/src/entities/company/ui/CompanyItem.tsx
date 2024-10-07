import React from "react";
import { Company } from "../model";
import styles from "./CompanyItem.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { addFavoriteCompany } from "@/entities/favoriteCompany";


type Props = {
    company: Company;
}

const CompanyItem: React.FC<Props> = ({ company }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.user.user?.id);
    const { loading, error } = useAppSelector((state) => state.favoriteCompanies)
    


    const handleCardClick = () => {
        navigate(`${ROUTES.COMPANY}/${company.id}`);
    };

    const handleAddToFavorites = async () => {
        if (!userId) return;
        const companyId = company.id;
        await dispatch(addFavoriteCompany({ userId, companyId }));
    };

    return (
        <div className="container">
            <button 
                onClick={handleCardClick} 
                className={styles.companyCard} 
            >
                <img 
                    className="companyLogo" 
                    src={`${import.meta.env.VITE_IMG}${company.logo}`} 
                    alt={`${company.name} логотип`} 
                    style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <h3 className={styles.companyName}>{company.name}</h3>
            </button>
            <button 
                onClick={handleAddToFavorites} 
                disabled={loading || !userId}
                className={styles.addFavoriteButton}
            >
                {loading ? 'Добавление...' : 'Добавить в избранное'}
            </button>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export const MemorizedCompanyItem = React.memo(CompanyItem);