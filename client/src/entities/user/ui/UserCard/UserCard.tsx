import React from "react";
import styles from "./UserCard.module.css";
import { User } from "../../model";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button
      onClick={() => navigate(`/users/${user.id}`)}
        className={styles.userCard}
        style={{ cursor: "pointer", width: "100%", textAlign: "left" }}
      >
        <div className={styles.avatarContainer}>
        <img
            className={styles.avatar}
            src={`${import.meta.env.VITE_IMG}${user?.avatar}`}
            alt={`${user.firstname} ${user.surname}`}
          />
          <h3 className={styles.firstname}>{user.firstname}</h3>
          <h3 className={styles.surname}>{user.surname}</h3>
        </div>
      </button>
    </div>
  );
};
