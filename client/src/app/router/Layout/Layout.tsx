import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { refreshAccessToken } from "@/entities/user";
import { FooterComponent } from "@/widgets/Footer";
import { NavBar } from "@/widgets/NavBar";
import { Layout } from "antd";

const { Content } = Layout;
const AppLayout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);

  return (
    <>
      <Layout className="layout">
        <NavBar />
        <Content>
          <Outlet />
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};

export default AppLayout;
