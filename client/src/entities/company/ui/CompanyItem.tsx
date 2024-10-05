import React from "react";
import { Company } from "../model";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { deleteCompany } from "../model/comapnyThunks";
import CompanyFormUpdate from "@/widgets/CompanyFormUpdate/CompanyFormUpdate";

type Props = {
    company: Company;
}

const CompanyItem: React.FC<Props> = ({ company }) => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);

    const handleDeleteCompany = () => {
        try {
           void dispatch(deleteCompany({id: company.id})); 
        } catch (error) {
            console.error("Error deleting company:", error); 
        }
    };

    return (
        <>
         <div>
            <h3>{company.name}</h3>
            <p>Описание: {company.description}</p>
            <p>Почта: {company.email}</p>
            <p>Номер телефона: {company.phone}</p>
            {user?.id === company.userId ? (
                <button onClick={handleDeleteCompany}>Удалить</button>
            ) : (
                <p>У вас нет прав на удаление этой компании.</p>
            )}
            <CompanyFormUpdate company={company} />
        </div>
        </>
    )

}



export const MemorizedCompanyItem = React.memo(CompanyItem);
