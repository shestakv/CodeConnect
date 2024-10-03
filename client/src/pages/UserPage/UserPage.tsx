import { useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserPage.module.css";
import { SettingOutlined } from "@ant-design/icons";

type UserPageProps = {};

export const UserPage: React.FC<UserPageProps> = ({}) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleHeader}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatar}
              src={`${import.meta.env.VITE_IMG}${user?.avatar}`}
            />
            <div className={styles.settingIconImg}>
              <SettingOutlined />
            </div>
          </div>
          <div>
            {user && user.surname} {user && user.firstname}{" "}
            {user && user.patronymic}
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.workExperience}>
            <div className={styles.divider}>
              <h3 className={styles.title}>Опыт работы: </h3>
              <h3 className={styles.secondTitle}>
                {user && user?.workExperience}
              </h3>
            </div>
            <SettingOutlined className={styles.settingIcon} />
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.education}>
            <div className={styles.divider}>
              <h3 className={styles.title}>Образование: </h3>
              <h3 className={styles.secondTitle}>{user && user?.education}</h3>
            </div>
            <SettingOutlined className={styles.settingIcon} />
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.bio}>
            <div className={styles.divider}>
              <h3 className={styles.title}>О Себе: </h3>
              <h3 className={styles.secondTitle}>{user && user?.bio}</h3>
            </div>
            <SettingOutlined className={styles.settingIcon} />
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.phone}>
            <div className={styles.divider}>
              <h3 className={styles.title}>Телефон: </h3>{" "}
              <h3 className={styles.secondTitle}>
                {user && Number(user?.phone)}
              </h3>
            </div>
            <SettingOutlined className={styles.settingIcon} />
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.location}>
            <div className={styles.divider}>
              <h3 className={styles.title}>Локация: </h3>
              <h3 className={styles.secondTitle}>{user && user?.location}</h3>
            </div>
            <SettingOutlined className={styles.settingIcon} />
          </div>
        </div>
      </div>
    </>
  );
};
