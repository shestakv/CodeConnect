import React from "react";
import styles from "./FavoriteCompanyItem.module.css"; // Измените имя файла на нужное
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { Company } from "@/entities/company";

type Props = {
    company: Company;
}

const FavoriteCompanyItem: React.FC<Props> = ({ company }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`${ROUTES.FAVORITES_COMPANY}`);
    };

    return (
        <div className="container">
            <button 
                onClick={handleCardClick} 
                className={styles.favoriteCompanyCard}
            >
                <img 
                    className="companyLogo" 
                    src={`${import.meta.env.VITE_IMG}${company.logo}`} 
                    alt={`${company.name} логотип`} 
                    style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <h3 className={styles.companyName}>{company.name}</h3>
            </button>
        </div>
    );
};

export const MemorizedFavoriteCompanyItem = React.memo(FavoriteCompanyItem);
