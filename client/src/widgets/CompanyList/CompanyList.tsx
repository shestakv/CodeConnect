import { CompanyItem, getAllCompanies } from "@/entities/company"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks"
import React, { useEffect, useState } from "react"
import styles from "./CompanyList.module.css"
import { Radio } from 'antd';

export const CompanyList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { companies, loading, error } = useAppSelector((state) => state.company);
    const userId = useAppSelector((state) => state.user.user?.id);
    const [showUserCompanies, setShowUserCompanies] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);

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

    const filteredCompanies = showUserCompanies
        ? companies.filter(company => company.userId === userId)
        : companies;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRadioChange = (e: any) => {
        setIsVisible(false);
        setTimeout(() => {
            setShowUserCompanies(e.target.value === 'user');
            setIsVisible(true);
        }, 500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.radioGroup}>
                <Radio.Group 
                    value={showUserCompanies ? 'user' : 'all'} 
                    onChange={handleRadioChange}
                >
                    <Radio.Button value="all">Показать все компании</Radio.Button>
                    <Radio.Button value="user">Показать мои компании</Radio.Button>
                </Radio.Group>
            </div>
            <div className={`${styles.cardContainer} ${!isVisible ? styles.hidden : ''}`}>
                {filteredCompanies.map((company) => (
                    <CompanyItem key={company.id} company={company} />
                ))}
            </div>
        </div>
    );
};

