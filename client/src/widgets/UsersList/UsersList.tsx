import { getAllUsers } from "@/entities/user";
import { UserCard } from "@/entities/user/ui";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React, { useEffect } from "react";
import styles from "./UsersList.module.css";

export const UsersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!loading && users.length === 0) {
      dispatch(getAllUsers());
    }
  }, [dispatch, loading, users.length]);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
