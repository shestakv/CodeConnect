import { UsersList } from "@/widgets/UsersList";
import styles from "./UserPage.module.css";

export const UsersPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <UsersList />
    </div>
  );
};
