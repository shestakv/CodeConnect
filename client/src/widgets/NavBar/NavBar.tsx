import { Flex, Layout, Menu } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { logout } from "@/entities/user";
import { UserCard } from "@/entities/user/ui";
import { ROUTES } from "@/app/router/routes";
// import { logout } from "@/entities/user";

const { Header } = Layout;


export const NavBar: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Header className={styles.header}>
      <Menu className={styles.menu} mode="horizontal" defaultSelectedKeys={["/"]}>
        <Menu.Item key="/">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="/companies">
              <Link to="/companies">Компании</Link>
            </Menu.Item>
        {user ? (
          <>
            <Link to={ROUTES.PROFILE}>
              <div className={styles.avatarContainer}>
                <img className={styles.avatar} src={`${import.meta.env.VITE_IMG}${user.avatar}`} />
                  {user.firstname} {user.surname}
              </div>
            </Link>
            <Menu.Item key="/game">
              <Link to="/game">Игра</Link>
            </Menu.Item>
            <Menu.Item key="/logout" onClick={handleLogout}>
              Выйти
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="/signin">
              <Link to="/signin">Вход</Link>
            </Menu.Item>
            <Menu.Item key="/signup">
              <Link to="/signup">Регистрация</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};
