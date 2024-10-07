import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserPage.module.css";
import { SettingOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import {
  getUserById,
  updateAvatarUserOnServer,
  updateUserOnServer,
} from "@/entities/user/model/userThunks";
import { FIELDS_MAP, type FormDataType, RUSSIAN_FIELDS } from "@/entities/user";
import { useParams } from "react-router-dom";
import { Button } from "antd";

export const UserPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userPersonal } = useAppSelector((state) => state.user);
  
  const { user } = useAppSelector((state) => state.user);
  
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState<FormDataType>({
    workExperience: "",
    education: "",
    bio: "",
    phone: "",
    location: "",
    avatar: "",
  });

  const handleEditClick = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);

      dispatch(updateAvatarUserOnServer(formData));
    }
  };

  const handleSave = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormDataType
  ) => {
    e.preventDefault();
    const userData = { [field]: formData[field] };
    const updatedUser = await dispatch(updateUserOnServer({ userData }));

    if (updatedUser.meta.requestStatus === "fulfilled") {
      dispatch(getUserById({ id: +id! }));
    }
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  useEffect(() => {
    if (id && (!userPersonal || userPersonal.id !== +id)) {
      dispatch(getUserById({ id: +id }));
    }
  }, [id, dispatch, userPersonal, setFormData]);

  useEffect(() => {
    if (userPersonal) {
      setFormData({
        workExperience: userPersonal.workExperience || "",
        education: userPersonal.education || "",
        bio: userPersonal.bio || "",
        phone: userPersonal.phone || "",
        location: userPersonal.location || "",
        avatar: userPersonal.avatar || "",
      });
    }
  }, [userPersonal]);

  return (
    <div className={styles.container}>
      <div className={styles.titleHeader}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={`${import.meta.env.VITE_IMG}${userPersonal?.avatar}`}
          />

          {user?.id === userPersonal?.id ? (
            <div className={styles.settingIconImg}>
              <button
                className={styles.buttonImg}
                onClick={() => fileInputRef.current?.click()}
              >
                <SettingOutlined />
              </button>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          {userPersonal && userPersonal.surname}{" "}
          {userPersonal && userPersonal.firstname}{" "}
          {userPersonal && userPersonal.patronymic}
          {"\n\t"}
          Возраст:
          {userPersonal && userPersonal.age}{" "}
        </div>
      </div>

      {FIELDS_MAP.map((field) => (
        <div key={field} className={styles.secondContainer}>
          <div className={styles[field]}>
            <div className={styles.divider}>
              <h3 className={styles.title}>{`${RUSSIAN_FIELDS[field]}:`}</h3>
              {isEditing[field] ? (
                <>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      value={formData[field]}
                      className={styles.input}
                      onChange={(e) => handleInputChange(e, field)}
                    />
                    <Button
                      className={styles.inputButton}
                      onClick={(e) => handleSave(e, field)}
                    >
                      Сохранить
                    </Button>
                  </div>
                </>
              ) : (
                <h3 className={styles.secondTitle}>{formData[field]}</h3>
              )}
            </div>

            {user?.id === userPersonal?.id ? (
              <div className={styles.buttonContainer}>
                <div className={styles.secondButtonContainer}>
                  <button
                    className={styles.button}
                    onClick={() => handleEditClick(field)}
                  >
                    <SettingOutlined className={styles.settingIcon} />
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
