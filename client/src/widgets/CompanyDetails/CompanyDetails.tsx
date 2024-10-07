import { deleteCompany, getCompanyById, updateCompany } from "@/entities/company";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import ModalWindow from "@/shared/ui/ModalWindow/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CompanyDetails.module.css";
import { SettingOutlined } from "@ant-design/icons";
import { ClientCompany } from "@/entities/company/model";

enum FIELDS{
    NAME = "name",
    DESCRIPTION = "description",
    EMAIL = "email",
    PHONE = "phone",
    LOGO = "logo"
}

 const FIELDS_MAP: Array <keyof ClientCompany>  = [
    FIELDS.NAME,
    FIELDS.DESCRIPTION,
    FIELDS.EMAIL,
    FIELDS.PHONE,
    FIELDS.LOGO
]

const RUSSIAN_FIELDS: Record<FIELDS, string> = {
    [FIELDS.NAME]: "Название",
    [FIELDS.DESCRIPTION]: "Описание",
    [FIELDS.EMAIL]: "Электронная почта",
    [FIELDS.PHONE]: "Телефон",
    [FIELDS.LOGO]: "Логотип"
}



const CompanyDetails = () => {
    const [isHovering, setIsHovering] = useState(false);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { company } = useAppSelector((state) => state.company);
    const { user } = useAppSelector((state) => state.user);
    const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({});
    const [formData, setFormData] = useState<ClientCompany>({
        name: company?.name,
        description: company?.description,
        email: company?.email,
        phone: company?.phone,
        logo: company?.logo,
    });
    const [deleteActive, setDeleteActive] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(getCompanyById({ id: Number(id) }));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (company) {
            setFormData({
                name: company.name,
                description: company.description,
                email: company.email,
                phone: company.phone,
                logo: company.logo,
            });
        }
    }, [company]);

    const handleEditClick = (field: string) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string
    ) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSave = (field: keyof ClientCompany) => {
        const updatedCompany = { ...formData, [field]: formData[field], logo: formData.logo };
        if (!company || !company.id || !user?.id) return;
        dispatch(updateCompany({ ...updatedCompany, id: company.id }));
        setIsEditing((prev) => ({ ...prev, [field]: false }));
    };

    const toggleDeleteModal = () => {
        setDeleteActive(!deleteActive);
    };

    const handleDeleteCompany = () => {
        dispatch(deleteCompany({ id: Number(id) }));
        toggleDeleteModal();
    };

    if (!company) {
        return <div>Загрузка...</div>;
    }

    return (
<div className={styles.formContainer}>
<div className={styles.centeredContainer}>
    <div className={styles.logoContainer}>
        <img 
            className={styles.companyLogo} 
            src={`${import.meta.env.VITE_IMG}${formData.logo}`} 
            alt={`${company.name} логотип`} 
            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
            onMouseEnter={() => setIsHovering(true)} 
            onMouseLeave={() => setIsHovering(false)}
        />
        {isHovering && (
            <button 
                className={styles.button} 
                onClick={() => handleEditClick(FIELDS.LOGO)}
            >
                <SettingOutlined className={styles.settingIcon} />
            </button>
        )}
    </div>
    <div className={styles.avatarContainer}>
        <h2 className={styles.companyName}>{formData.name}</h2>
    </div>
</div>

    {FIELDS_MAP.filter(field => field !== FIELDS.NAME && field !== FIELDS.LOGO).map((field) => (
        <div key={field} className={styles.fieldContainer}>
            <div className={styles[field]}>
                <div className={styles.divider}>
                    <h3 className={styles.fieldTitle}>
                        {`${RUSSIAN_FIELDS[field]}:`}
                    </h3>
                    {isEditing[field] ? (
                        <>
                            <input
                                type="text"
                                className={styles.inputField}
                                value={formData[field]}
                                onChange={(e) => handleInputChange(e, field)}
                            />
                            <button className={styles.buttonSave} onClick={() => handleSave(field)}>Сохранить</button>
                        </>
                    ) : (
                        <h3 className={styles.secondTitle}>{formData[field]}</h3>
                    )}
                </div>
                <div className={styles.iconContainer}>
                    <button className={styles.button} onClick={() => handleEditClick(field)}>
                        <SettingOutlined className={styles.settingIcon} />
                    </button>
                </div>
            </div>
        </div>
    ))}

    {user && user.id === company.userId && (
        <>
            <button className={styles.buttonDelete} onClick={toggleDeleteModal}>
                Удалить компанию
            </button>
            <ModalWindow active={deleteActive} setActive={setDeleteActive}>
                <div className="modal__content">
                    <h3>Вы уверены, что хотите удалить эту компанию?</h3>
                    <div className="modalButtons">
                        <button className="confirm" onClick={handleDeleteCompany}>Да</button>
                        <button className="cancel" onClick={toggleDeleteModal}>Нет</button>
                    </div>
                </div>
            </ModalWindow>
        </>
    )}
</div>

    );
};

export default CompanyDetails;
