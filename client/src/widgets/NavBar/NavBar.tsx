import { Flex, Layout, Menu } from "antd";
import style from "./NavBar.module.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { logout } from "@/entities/user";
import { UserCardNavBar } from "@/entities/user/ui/UserCardNavBar/UserCardNavBar";
import { ROUTES } from "@/app/router/routes";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Space } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const App: React.FC = () => {
  const { styles } = useStyle();

  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Space>
        <Button type="primary" size="large" icon={<AntDesignOutlined />}>
          Gradient Button
        </Button>
        <Button size="large">Button</Button>
      </Space>
    </ConfigProvider>
  );
};

export default App;

const { Header } = Layout;

export const NavBar: React.FC = () => {
  const { styles } = useStyle();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <ConfigProvider
        button={{
          className: styles.linearGradientButton,
        }}
      >
    <Header className={style.header}>
      
        <Menu
          className={style.menu}
          mode="horizontal"
          defaultSelectedKeys={["/"]}
        >

          <Menu.Item key="/">
            <Space>
              <Button shape="round" onClick={() => navigate("/")}>
                Главная
              </Button>
            </Space>
          </Menu.Item>

          <Menu.Item key="/users">
            <Button shape="round" onClick={() => navigate("/users")}>
              Кодеры
            </Button>
          </Menu.Item>

          <Menu.Item key="/companies">
            <Button shape="round" onClick={() => navigate("/companies")}>
              Компании
            </Button>
          </Menu.Item>

          {user ? (
            <>
              <Menu.Item key={ROUTES.USERS + `/${user.id}`}>
                <Link to={ROUTES.USERS + `/${user.id}`}>
                  <UserCardNavBar
                    avatar={`${import.meta.env.VITE_IMG}${user.avatar}`}
                    firstname={user.firstname}
                    surname={user.surname}
                  />
                </Link>
              </Menu.Item>

              <Menu.Item key="/logout" onClick={handleLogout}>
                <Button shape="round" onClick={() => navigate("/")}>
                  Выйти
                </Button>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="/signin">
                <Button shape="round" onClick={() => navigate("/signin")}>
                  Вход
                </Button>
              </Menu.Item>

              <Menu.Item key="/signup">
                <Button shape="round" onClick={() => navigate("/signup")}>
                  Регистрация
                </Button>
              </Menu.Item>
            </>
          )}
        </Menu>
    
    </Header>
    </ConfigProvider>
  );
};
