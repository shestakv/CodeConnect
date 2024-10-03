import React from "react";
import { Company } from "../model";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { deleteCompany } from "../model/comapnyThunks";
import CompanyFormUpdate from "@/widgets/CompanyFormUpdate/CompanyFormUpdate";
import styles from "./CompanyItem.module.css";

type Props = {
    company: Company;
}

const CompanyItem: React.FC<Props> = ({ company }) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);

    const handleDeleteCompany = () => {
        try {
            void dispatch(deleteCompany({ id: company.id }));
        } catch (error) {
            console.error("Error deleting company:", error);
        }
    };

    return (
        <div className={styles.companyCard}>
            <h3 className={styles.companyName}>{company.name}</h3>
            <p className={styles.companyDescription}>Описание: {company.description}</p>
            <p className={styles.companyEmail}>Почта: {company.email}</p>
            <p className={styles.companyPhone}>Номер телефона: {company.phone}</p>
            {user?.id === company.userId ? (
                <button onClick={handleDeleteCompany} className={styles.deleteButton}>Удалить</button>
            ) : (
                <p className={styles.noPermission}>У вас нет прав на удаление этой компании.</p>
            )}
            <CompanyFormUpdate company={company} />
        </div>
    );
};



export const MemorizedCompanyItem = React.memo(CompanyItem);
