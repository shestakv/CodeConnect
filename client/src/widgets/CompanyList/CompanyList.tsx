import { CompanyItem, getAllCompanies } from "@/entities/company"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks"
import React, { useEffect } from "react"

export const CompanyList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { companies, loading, error } = useAppSelector((state) => state.company);

    useEffect(() => {
        void dispatch(getAllCompanies());
    }, [dispatch]);

    if (loading) {
        return <p>Загрузка компаний...</p>;
    }

    if (error) {
        return <p>Ошибка при загрузке компаний: {error}</p>;
    }

    if (companies.length === 0) {
        return <p>Компаний нет.</p>;
    }

    return (
        <div>
            {companies.map((company) => (
                <CompanyItem key={company.id} company={company}  />
            ))}
        </div>
    );
};