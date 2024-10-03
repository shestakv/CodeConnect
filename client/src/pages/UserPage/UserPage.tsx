import { useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserPage.module.css";

type UserPageProps = {}

export const UserPage: React.FC<UserPageProps> = ({}) => {
    const user = useAppSelector((state) => state.user.user);
    console.log(user);
    
    return (
      <>
        <div className={styles.container}>
          <div className={styles.titleHeader}>
            <img
              className={styles.avatar}
              src={`${import.meta.env.VITE_IMG}${user.avatar}`}
            />
            <div>
              {user && user?.firstname} {user && user?.surname}{" "}
              {user && user?.patronymic}
            </div>
          </div>
          <div className={styles.workExperience}>
            <h3 className={styles.title}>Опыт работы: </h3>{" "}
            {user && user?.workExperience}
          </div>
          <div className={styles.education}>
            <h3 className={styles.title}>Образование: </h3>{" "}
            {user && user?.education}
          </div>
          <div className={styles.bio}>
            <h3 className={styles.title}>Информация: </h3> {user && user?.bio}
          </div>
          <div className={styles.phone}>
            <h3 className={styles.title}>Телефон: </h3> {user && Number(user?.phone)}
          </div>
          <div className={styles.location}>
            <h3 className={styles.title}>Локация: </h3>
            {user && user?.location}
          </div>
        </div>
      </>
    );
}
