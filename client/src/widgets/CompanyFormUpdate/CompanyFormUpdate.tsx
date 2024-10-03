import { Company, updateCompany } from "@/entities/company"
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { useState } from "react";

function CompanyFormUpdate({
    company,
}: {
    company: Company
}): JSX.Element {
    const [name, setName] = useState(company.name);
    const [email, setEmail] = useState(company.email);
    const [phone, setPhone] = useState(company.phone);
    const [description, setDescription] = useState(company.description);
    const [logo, setLogo] = useState(company.logo);
    const dispatch = useAppDispatch();

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
            try {
                dispatch(updateCompany({ id: company.id, name, email, phone, description, logo }));
            } catch (error) {
                console.error("Error updating post:", error);
            }
        }


    return (
        <>
        <form onSubmit={handleUpdate}>
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
            <button type="submit">Изменить</button>
        </form>
        </>
    )
}


export default CompanyFormUpdate
