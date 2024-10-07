import React from "react";
import styles from "./UserCardNavBar.module.css";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

interface UserCardNavBarProps {
  avatar: string | '';
  firstname: string | '';
  surname: string | '';
}

export const UserCardNavBar: React.FC<UserCardNavBarProps> = ({ avatar, firstname, surname }) => {
  return (
    <div className={styles.avatarContainer}>
      {firstname} {surname}
      <img className={styles.avatar} src={avatar} alt={`${firstname} ${surname}`} />
    </div>
  );
};