import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserPage.module.css";
import {
  PlusCircleOutlined,
  RightOutlined,
  SettingOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import {
  getUserById,
  updateAvatarUserOnServer,
  updateUserOnServer,
} from "@/entities/user/model/userThunks";
import {
  FIELDS,
  FIELDS_MAP,
  type FormDataType,
  RUSSIAN_FIELDS,
} from "@/entities/user";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUserStacks } from "@/entities/userStack";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import ModalWindow from "@/shared/ui/ModalWindow/Modal";
import { UserStackAddForm } from "@/entities/userStack/ui/userStackAddForm";
import { getAllStacks } from "@/entities/stack";
import { deleteUserStack } from "@/entities/userStack/model/userStackThunks";

export const UserPage: React.FC = () => {
  const navigate = useNavigate();
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
    setIsEditing((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const handleSettingClick = () => {
    setShowCloseIcon((prev) => !prev);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    field: string
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);
      dispatch(updateAvatarUserOnServer({ formData }));
    }
  };

  const handleDeletedStack = (stackId: number) => {
    dispatch(deleteUserStack({ id: stackId }));
  };

  const handleSave = async (field: keyof FormDataType) => {
    const userData = { [field]: formData[field] };
    const updatedUser = await dispatch(updateUserOnServer({ userData }));

    if (updatedUser.meta.requestStatus === "fulfilled") {
      dispatch(getUserById({ id: +id! }));
    }
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    field: keyof FormDataType
  ) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault(); 
      handleSave(field);
    }
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

  useEffect(() => {
    dispatch(getAllStacks());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userStacks } = useAppSelector((state) => state.userStacks);

  useEffect(() => {
    if (id) {
      dispatch(getAllUserStacks({ userId: +id }));
    }
  }, [id, dispatch]);

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
              <SettingOutlined
                className={styles.buttonImg}
                onClick={() => fileInputRef.current?.click()}
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          ) : null}
        </div>
        <div>
          {userPersonal && userPersonal.surname}{" "}
          {userPersonal && userPersonal.firstname}{" "}
          {userPersonal && userPersonal.patronymic}
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.userStacks}>
          <div className={styles.dividerStacks}>
            <div className={styles.topContainer}>
              <h3 className={styles.title}>Навыки:</h3>
              <div>
                {user?.id === userPersonal?.id && (
                  <SettingOutlined
                    onClick={handleSettingClick}
                    className={styles.stackSettingIcon}
                  />
                )}
                {userStacks && userStacks.length > 0 ? (
                  <Button
                    className={styles.userStacksButton}
                    type="default"
                    shape="round"
                    onClick={() => navigate(`/users/userStacks/${id}`)}
                  >
                    Подробнее
                    <RightOutlined />
                  </Button>
                ) : null}
              </div>
            </div>
            <div className={styles.userStacksContainer}>
              {userStacks && userStacks.length > 0 ? (
                userStacks?.map((userStack) => (
                  <div key={userStack?.id} className={styles.stackCard}>
                    <div className={styles.stackCardContent}>
                      <div className={styles.stackCardTitle}>
                        {userStack?.Stack.title}
                      </div>
                      <img
                        src={`${import.meta.env.VITE_IMG}${
                          userStack?.Stack.image
                        }`}
                        alt="Stack Icon"
                        className={styles.stackIcon}
                      />
                      {showCloseIcon && (
                        <span
                          className={styles.ButtonCloseIcon}
                          onClick={() => handleDeletedStack(userStack.id)}
                        >
                          <CloseOutlined className={styles.closeIcon} />
                        </span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  {userPersonal?.id === user?.id ? null : (
                    <h3>Навыки не добавлены</h3>
                  )}
                </div>
              )}
              {userPersonal?.id === user?.id ? (
                <div>
                  <button
                    className={styles.stackCard}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className={styles.stackCardContent}>
                      <div className={styles.stackCardTitle}>Добавить</div>
                      <div className={styles.divIcon}>
                        <PlusCircleOutlined className={styles.plusIcon} />
                      </div>
                    </div>
                  </button>
                  <ModalWindow
                    active={isModalOpen}
                    setActive={() => setIsModalOpen(false)}
                  >
                    <UserStackAddForm onClose={() => setIsModalOpen(false)} />
                  </ModalWindow>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {FIELDS_MAP.map((field) => (
        <div key={field} className={styles.secondContainer}>
          <div className={styles[field]}>
            <div className={styles.divider}>
              <h3 className={styles.title}>{`${
                RUSSIAN_FIELDS[field as FIELDS]
              }:`}</h3>
              <div className={styles.inputWrapper}>
                {isEditing[field] ? (
                  <TextArea
                    className={styles.input}
                    value={formData[field]}
                    autoSize
                    onChange={(e) => handleInputChange(e, field)}
                    onKeyDown={(e) => handleKeyDown(e, field)}
                  />
                ) : (
                  <pre
                    className={styles.secondTitle}
                    style={{ textOverflow: "ellipsis" }}
                  >
                    {formData[field]}
                  </pre>
                )}
              </div>
              {isEditing[field] && (
                <Button
                  className={styles.inputButton}
                  onClick={() => handleSave(field)}
                >
                  Сохранить
                </Button>
              )}
            </div>
            {user?.id === userPersonal?.id && (
              <div className={styles.buttonContainer}>
                <div className={styles.secondButtonContainer}>
                  <SettingOutlined
                    onClick={() => handleEditClick(field)}
                    className={styles.settingIcon}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
