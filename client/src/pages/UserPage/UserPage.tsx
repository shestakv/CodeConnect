import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserPage.module.css";
import { SettingOutlined } from "@ant-design/icons";
import { updateUser } from "@/entities/user/model/userSlice";
import { useState } from "react";
import { updateUserOnServer } from "@/entities/user/model/userThunks";

type UserPageProps = {};

export const UserPage: React.FC<UserPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState({
    workExperience: user?.workExperience,
    education: user?.education,
    bio: user?.bio,
    phone: user?.phone,
    location: user?.location,
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

  const handleSave = (field: string) => {

    const userData = { [field]: formData[field] };
    
    dispatch(updateUserOnServer({ userData })); // Используем thunk для обновления
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleHeader}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={`${import.meta.env.VITE_IMG}${user?.avatar}`}
          />
          <div className={styles.settingIconImg}>
            <button className={styles.buttonImg}>
              <SettingOutlined />
            </button>
          </div>
        </div>
        <div>
          {user && user.surname} {user && user.firstname}{" "}
          {user && user.patronymic}
        </div>
      </div>

      {["workExperience", "education", "bio", "phone", "location"].map(
        (field) => (
          <div key={field} className={styles.secondContainer}>
            <div className={styles[field]}>
              <div className={styles.divider}>
                <h3 className={styles.title}>{`${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }:`}</h3>
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
              <button
                className={styles.button}
                onClick={() => handleEditClick(field)}
              >
                <SettingOutlined className={styles.settingIcon} />
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.titleHeader}>
//           <div className={styles.avatarContainer}>
//             <img
//               className={styles.avatar}
//               src={`${import.meta.env.VITE_IMG}${user?.avatar}`}
//             />
//             <div className={styles.settingIconImg}>
//               <button className={styles.buttonImg}>
//               <SettingOutlined />
//               </button>
//             </div>
//           </div>
//           <div>
//             {user && user.surname} {user && user.firstname}{" "}
//             {user && user.patronymic}
//           </div>
//         </div>
//         <div className={styles.secondContainer}>
//           <div className={styles.workExperience}>
//             <div className={styles.divider}>
//               <h3 className={styles.title}>Опыт работы: </h3>
//               <h3 className={styles.secondTitle}>
//                 {user && user?.workExperience}
//               </h3>
//             </div>
//             <button className={styles.button}>
//             <SettingOutlined className={styles.settingIcon} />
//             </button>
//           </div>
//         </div>
//         <div className={styles.secondContainer}>
//           <div className={styles.education}>
//             <div className={styles.divider}>
//               <h3 className={styles.title}>Образование: </h3>
//               <h3 className={styles.secondTitle}>{user && user?.education}</h3>
//             </div>
//             <button className={styles.button}>
//             <SettingOutlined className={styles.settingIcon} />
//             </button>
//           </div>
//         </div>
//         <div className={styles.secondContainer}>
//           <div className={styles.bio}>
//             <div className={styles.divider}>
//               <h3 className={styles.title}>О Себе: </h3>
//               <h3 className={styles.secondTitle}>{user && user?.bio}</h3>
//             </div>
//             <button className={styles.button}>
//             <SettingOutlined className={styles.settingIcon} />
//             </button>
//           </div>
//         </div>
//         <div className={styles.secondContainer}>
//           <div className={styles.phone}>
//             <div className={styles.divider}>
//               <h3 className={styles.title}>Телефон: </h3>{" "}
//               <h3 className={styles.secondTitle}>
//                 {user && Number(user?.phone)}
//               </h3>
//             </div>
//             <button className={styles.button}>
//             <SettingOutlined className={styles.settingIcon} />
//             </button>
//           </div>
//         </div>
//         <div className={styles.secondContainer}>
//           <div className={styles.location}>
//             <div className={styles.divider}>
//               <h3 className={styles.title}>Локация: </h3>
//               <h3 className={styles.secondTitle}>{user && user?.location}</h3>
//             </div>
//             <button className={styles.button}>
//               <SettingOutlined className={styles.settingIcon} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
