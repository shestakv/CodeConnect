import { CompanyItem, getAllCompanies } from "@/entities/company"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks"
import React, { useEffect, useState } from "react"
import styles from "./CompanyList.module.css"
import { Radio, RadioChangeEvent } from 'antd';
import { getFavoriteCompanies, type FavoriteCompany } from "@/entities/favoriteCompany";


interface FavoriteCompanyState {
    favoriteCompanies: FavoriteCompany[];
}

export const CompanyList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { companies, loading, error } = useAppSelector((state) => state.company);
    const { favoriteCompanies }: FavoriteCompanyState = useAppSelector((state) => state.favoriteCompanies);
    const userId = useAppSelector((state) => state.user.user?.id);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [filter, setFilter] = useState<'all' | 'user' | 'favorites'>('all');


    const filteredCompanies = (() => {
        if (filter === 'user') {
            return companies.filter(company => company.userId === userId);
        }
        
        if (filter === 'favorites') {
            const favoriteCompanyIds = favoriteCompanies.map(fav => fav.companyId);
            
            return companies.filter(company => favoriteCompanyIds.includes(company.id));
        }

        if(filter === 'all') {  
            return companies;
        }
        
        return companies;
    })();

    const handleRadioChange = (e: RadioChangeEvent) => {
        setIsVisible(false);
        setTimeout(() => {
            setFilter(e.target.value as 'all' | 'user' | 'favorites');
            setIsVisible(true);
        }, 500);
    };

    useEffect(() => {

        void dispatch(getAllCompanies());
        void dispatch(getFavoriteCompanies());

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
        <div className={styles.container}>
            <div className={styles.radioGroup}>
                <Radio.Group 
                    value={filter} 
                    onChange={handleRadioChange}
                >
                    <Radio.Button value="all">Показать все компании</Radio.Button>
                    <Radio.Button value="user">Показать мои компании</Radio.Button>
                    <Radio.Button value="favorites">Показать избранные</Radio.Button>
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

