import React from "react";
import { Layout } from "antd";
import style from "./Footer.module.css";
import {
  YoutubeOutlined,
  XOutlined,
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

export const FooterComponent: React.FC = () => {
  return (
    <div className={style.container}>
      <Footer className={style.footer}>
        <p> © {new Date().getFullYear()} CodeConnect</p>
        <div className={style.secondContainer}>
          <div className={style.icons}>
            <YoutubeOutlined />
          </div>
          <div className={style.icons}>
            <XOutlined />
          </div>
          <div className={style.icons}>
            <InstagramOutlined />
          </div>
          <div className={style.icons}>
            <FacebookOutlined />
          </div>
          <div className={style.icons}>
            <LinkedinOutlined />
          </div>
        </div>
      </Footer>
    </div>
  );
};
