import { deleteCompany, getCompanyById } from "@/entities/company";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import ModalWindow from "@/shared/ui/ModalWindow/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyFormUpdate from "../CompanyFormUpdate/CompanyFormUpdate";



const CompanyDetails = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { company } = useAppSelector((state) => state.company);
    const { user } = useAppSelector((state) => state.user);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(getCompanyById({ id: Number(id) }));
        }
    }, [id, dispatch]);

    const isActive = () => {
        setActive((prev) => !prev);
      };

    const handleDeleteCompany = () => {
        if (window.confirm("Вы уверены, что хотите удалить эту компанию?")) {
            dispatch(deleteCompany({ id: Number(id) }));
        }
    };

    if (!company) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h2>Название компании: {company.name}</h2>
            <p>Описание: {company.description}</p>
            <p>Почта: {company.email}</p>
            <p>Номер телефона: {company.phone}</p>
            {user && user.id === company.userId && (<>
                <button onClick={handleDeleteCompany} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>
                    Удалить компанию
                </button>
                <button onClick={isActive} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}>
                    Редактировать
                    </button>
                <ModalWindow active={active} setActive={setActive}>
                    <CompanyFormUpdate company={company} setActive={setActive}/>
                </ModalWindow>
                </>
            )}

        </div>
    );
};

export default CompanyDetails;