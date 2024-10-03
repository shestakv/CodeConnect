import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { stat } from "fs";
import styles from "./UserPage.module.css";

type UserPageProps = {}

export const UserPage: React.FC<UserPageProps> = ({}) => {
    const user = useAppSelector((state) => state.user.user);
    console.log(user);
    
    return (
      <>
        <div className={styles.titleHeader}>
          <img src={`${import.meta.env.VITE_IMG}${user.avatar}`} />
          {user && user?.firstname}
          {user && user?.surname}
        </div>
      </>
    );
}
