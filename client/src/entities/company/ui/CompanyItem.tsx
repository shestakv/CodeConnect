import React from "react";
import { Company } from "../model";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { deleteCompany } from "../model/comapnyThunks";
import CompanyFormUpdate from "@/widgets/CompanyFormUpdate/CompanyFormUpdate";
import styles from "./CompanyItem.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";

type Props = {
    company: Company;
}

const CompanyItem: React.FC<Props> = ({ company }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user } = useAppSelector((state) => state.user);

    const handleDeleteCompany = () => {
        try {
            void dispatch(deleteCompany({ id: company.id }));
        } catch (error) {
            console.error("Error deleting company:", error);
        }
    };

    const handleCardClick = () => {
        navigate(`${ROUTES.COMPANY}/${company.id}`);
    };

    return (
        <div className="container">
            <button 
                onClick={handleCardClick} 
                className={styles.companyCard} 
                style={{ cursor: 'pointer', width: '100%', textAlign: 'left' }} 
            >
                <h3 className={styles.companyName}>{company.name}</h3>
                <p className={styles.companyDescription}>Описание: {company.description}</p>
                <p className={styles.companyEmail}>Почта: {company.email}</p>
                <p className={styles.companyPhone}>Номер телефона: {company.phone}</p>
                {/* {user?.id === company.userId ? (
                    <button onClick={handleDeleteCompany} className={styles.deleteButton}>Удалить</button>
                ) : (
                    <p className={styles.noPermission}>У вас нет прав на удаление этой компании.</p>
                )}
                <CompanyFormUpdate company={company} /> */}
            </button>
        </div>
    );
};



export const MemorizedCompanyItem = React.memo(CompanyItem);
