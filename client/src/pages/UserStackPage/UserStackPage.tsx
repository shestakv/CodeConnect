import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import styles from "./UserStackPage.module.css";
import { SettingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllStackUsers } from "@/entities/stackUser/model/stackUserThunks";
import { User } from "@/entities/user";

type UserStackPageProps = {

};

export const UserStackPage: React.FC<UserStackPageProps> = ({ }) => {
  const { stackUsers } = useAppSelector((state) => state.stackUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStackUsers());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}></div>
    </>
  );
};
