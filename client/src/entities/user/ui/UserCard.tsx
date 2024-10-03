import React from 'react';
import { User } from '../model';
import styles from './UserCard.module.css';

type Props = {
  user: User;
};

export const UserCard: React.FC<Props> = ({ user }) => {
  return (
  <>
  <div className={styles.container}>
    <div className={styles.avatarContainer}>
      <img
      style={{width: "25px", height: "25px", margin: "10px"}}
        className={styles.avatar}
        src={user.avatar}
        alt={user.firstname}
        title={user.firstname}
      />
    </div>
  </div>
  </>
  );
};
