import {
  deleteCompany,
  getCompanyById,
  updateCompany,
} from "@/entities/company";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import ModalWindow from "@/shared/ui/ModalWindow/Modal";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CompanyDetails.module.css";
import { CloseOutlined, DownOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { ClientCompany } from "@/entities/company/model";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { updateCompanyLogo } from "@/entities/company/model/comapnyThunks";
import TextArea from "antd/es/input/TextArea";

enum FIELDS {
  NAME = "name",
  DESCRIPTION = "description",
  EMAIL = "email",
  PHONE = "phone",
  LOGO = "logo",
}

const FIELDS_MAP: Array<keyof ClientCompany> = [
  FIELDS.NAME,
  FIELDS.DESCRIPTION,
  FIELDS.EMAIL,
  FIELDS.PHONE,
  FIELDS.LOGO,
];

const RUSSIAN_FIELDS: Record<FIELDS, string> = {
  [FIELDS.NAME]: "Название",
  [FIELDS.DESCRIPTION]: "Описание",
  [FIELDS.EMAIL]: "Электронная почта",
  [FIELDS.PHONE]: "Телефон",
  [FIELDS.LOGO]: "Логотип",
};

const CompanyDetails = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
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
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = (field: keyof ClientCompany) => {
    const updatedCompany = {
      ...formData,
      [field]: formData[field],
      logo: formData.logo,
    };
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
    navigate("/companies");
  };

  if (!company) {
    return <div>Загрузка...</div>;
  }

  const items: MenuProps["items"] = [
    {
      label: "Удалить группу",
      key: "1",
      icon: <CloseOutlined />,
      danger: true,
    },
    {
      label: "Передача прав",
      key: "2",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const menuProps = {
    items,
    onClick: toggleDeleteModal,
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const companyData = new FormData();
      companyData.append("logo", file);

      dispatch(updateCompanyLogo({ companyData }));
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.centeredContainer}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={`${import.meta.env.VITE_IMG}${formData.logo}`}
            alt={`${company.name} логотип`}
          />
          {user && user.id === company.userId && (
            <div className={styles.settingIconImg}>
                <SettingOutlined 
                  className={styles.buttonImg}
                  onClick={() => fileInputRef.current?.click()}/>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>
        <div className={styles.avatarContainer}>
          <h2 className={styles.companyName}>{formData.name}</h2>
        </div>
        {user && user.id === company.userId && (
        <div className={styles.dropdownContainer}>
          <div>
          <Dropdown menu={menuProps}>
            <Button shape="round">
              <Space>
                Администрирование
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          </div>
        </div>
        )}
      </div>
      {FIELDS_MAP.filter(
        (field) => field !== FIELDS.NAME && field !== FIELDS.LOGO
      ).map((field) => (
        <div key={field} className={styles.fieldContainer}>
          <div className={styles[field]}>
            <div className={styles.divider}>
              <h3 className={styles.fieldTitle}>
                {`${RUSSIAN_FIELDS[field]}:`}
              </h3>
              <div className={styles.inputWrapper}>
              {isEditing[field] ? (
                <>
                  <TextArea
                  className={styles.input}
                  value={formData[field]}
                  autoSize
                  onChange={(e) => handleInputChange(e, field)}
                />
                <div className={styles.button}>
                  <Button
                    className={styles.buttonSave}
                    onClick={() => handleSave(field)}
                  >
                    Сохранить
                  </Button>
                  </div>
                </>
              ) : (
                <pre
                className={styles.secondTitle}
                style={{ textOverflow: "ellipsis" }}
              >
                {formData[field] }
              </pre>
                // <h3 className={styles.secondTitle}>{formData[field]}</h3>
              )}
              </div>
            </div>
            {user && user.id === company.userId && (
              <div className={styles.iconContainer}>
                <button
                  className={styles.button}
                  onClick={() => handleEditClick(field)}
                >
                  <SettingOutlined className={styles.settingIcon} />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {user && user.id === company.userId && (
        <>
          <ModalWindow active={deleteActive} setActive={setDeleteActive}>
            <div className={styles.modal__content}>
              <h3>Вы уверены, что хотите удалить эту компанию?</h3>
              <div className={styles.modalButtons}>
                <Button shape="round" color="primary" variant="solid" onClick={toggleDeleteModal}>
                  Нет
                </Button>
                <Button shape="round"  color="danger" variant="solid" onClick={handleDeleteCompany}>
                  Да
                </Button>
              </div>
            </div>
          </ModalWindow>
        </>
      )}
    </div>
  );
};

export default CompanyDetails;
