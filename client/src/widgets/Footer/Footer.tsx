import React from "react";
import { Layout } from "antd";
import style from "./Footer.module.css";

const { Footer } = Layout;

export const FooterComponent: React.FC = () => {
  return (
    <Footer
      className={style.footer}
    >
      <p> © {new Date().getFullYear()} CodeConnect</p>
    </Footer>
  );
};
