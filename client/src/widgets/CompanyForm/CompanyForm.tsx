import { createCompany } from "@/entities/company";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import React, { useState } from "react";
import styles from "./CompanyForm.module.css";

const CompanyForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFormVisible, setFormVisible] = useState(false);

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phone || !description) {
            console.error("All fields are required");
            return;
        }

        setIsLoading(true);

        try {
            console.log(name, email, phone, description, logo);
            await dispatch(createCompany({ name, email, phone, description, logo }));
            // Сброс полей формы
            setName("");
            setEmail("");
            setPhone('');
            setDescription("");
            setLogo("");
        } catch (error) {
            console.error("Error creating company:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggleForm = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <button onClick={handleToggleForm} className={styles.toggleButton}>
                    {isFormVisible ? "Скрыть" : "Создать компанию"}
                </button>
            </div>

            <div className={`${styles.formContainer} ${isFormVisible ? styles.show : ''}`}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Название компании"
                        required
                        className={styles.input}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email компании"
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Телефон"
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание компании"
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                        placeholder="URL логотипа"
                        className={styles.input}
                    />
                    <button type="submit" disabled={isLoading} className={styles.button}>
                        {isLoading ? "Создание..." : "Создать"}
                    </button>
                </form>
            </div>
        </div>
    );
};
    

export const MemorizedCompanyForm = React.memo(CompanyForm);