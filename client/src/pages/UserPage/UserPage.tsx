import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserPage.module.css";
import { RightOutlined, SettingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  getUserById,
  updateUserOnServer,
} from "@/entities/user/model/userThunks";
import { FIELDS_MAP, type FormDataType, RUSSIAN_FIELDS } from "@/entities/user";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUserStacks } from "@/entities/userStack";
import { Button } from "antd";

export const UserPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userPersonal } = useAppSelector((state) => state.userPersonal);
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState<FormDataType>({
    workExperience: userPersonal?.workExperience,
    education: userPersonal?.education,
    bio: userPersonal?.bio,
    phone: userPersonal?.phone,
    location: userPersonal?.location,
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

  const handleSave = (field: keyof FormDataType) => {
    const userData = { [field]: formData[field] };
    dispatch(updateUserOnServer({ userData }));
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  useEffect(() => {
    if (id && (!userPersonal || userPersonal.id !== +id)) {
      dispatch(getUserById({ id: +id }));
    }
  }, [id, dispatch, userPersonal, user]);

  useEffect(() => {
    if (userPersonal) {
      setFormData({
        workExperience: userPersonal.workExperience,
        education: userPersonal.education,
        bio: userPersonal.bio,
        phone: userPersonal.phone,
        location: userPersonal.location,
      });
    }
  }, [userPersonal]);

  const { userStacks } = useAppSelector((state) => state.userStacks);
  useEffect(() => {
    if (id) {
      dispatch(getAllUserStacks({ userId: +id }));
      console.log(userStacks);
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
              <button className={styles.buttonImg}>
                <SettingOutlined />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          {userPersonal && userPersonal.surname}{" "}
          {userPersonal && userPersonal.firstname}{" "}
          {userPersonal && userPersonal.patronymic}
        </div>
      </div>

      {FIELDS_MAP.map((field) => (
        <div key={field} className={styles.secondContainer}>
          <div className={styles[field]}>
            <div className={styles.divider}>
              <h3 className={styles.title}>{`${RUSSIAN_FIELDS[field]}:`}</h3>
              {isEditing[field] ? (
                <>
                  <input
                    type="text"
                    value={formData[field]}
                    onChange={(e) => handleInputChange(e, field)}
                  />
                  <button onClick={() => handleSave(field)}>Сохранить</button>
                </>
              ) : (
                <h3 className={styles.secondTitle}>{formData[field]}</h3>
              )}
            </div>
            {user?.id === userPersonal?.id ? (
              <button
                className={styles.button}
                onClick={() => handleEditClick(field)}
              >
                <SettingOutlined className={styles.settingIcon} />
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}

      <div className={styles.secondContainer}>
        <div className={styles.userStacks}>
          <div className={styles.divider}>
            <div className={styles.topContainer}>
              <h3 className={styles.title}>Навыки:</h3>
              {userStacks && userStacks.length > 0 ? (
                <Button
                  type="default"
                  shape="round"
                  onClick={() => navigate(`/users/userStacks/${id}`)}
                >
                  Подробнее
                  <RightOutlined />
                </Button>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.userStacksContainer}>
              {userStacks && userStacks.length > 0 ? (
                userStacks.map((userStack) => (
                  <div key={userStack.id} className={styles.stackCard}>
                    <div className={styles.stackCardContent}>
                      <div className={styles.stackCardTitle}>
                        {userStack.Stack.title}
                      </div>
                      <img
                        src={`${import.meta.env.VITE_IMG}${
                          userStack.Stack.image
                        }`}
                        alt="Stack Icon"
                        className={styles.stackIcon}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <h3>Навыки не добавлены</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
