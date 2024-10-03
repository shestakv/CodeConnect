import { createCompany } from "@/entities/company";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import React, { useState } from "react";

const CompanyForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Название компании"
                required
            />

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email компании"
                required
            />

            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон"
                required
            />

            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание компании"
                required
            />

            <input
                type="text"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                placeholder="URL логотипа"
            />

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Создание..." : "Создать компанию"}
            </button>
        </form>
    );
};

export const MemorizedCompanyForm = React.memo(CompanyForm);