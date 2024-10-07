import React from "react";
import { Company } from "../model";
import styles from "./CompanyItem.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

type Props = {
    company: Company;
}

const CompanyItem: React.FC<Props> = ({ company }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);

    const handleCardClick = () => {
        navigate(`${ROUTES.COMPANY}/${company.id}`);
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
            </div>
    );
};

export const MemorizedCompanyItem = React.memo(CompanyItem);