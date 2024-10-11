import { UsersList } from "@/widgets/UsersList";
import styles from "./UsersPage.module.css";

export const UsersPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <UsersList />
    </div>
  );
};
