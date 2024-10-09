import React from "react";
import { Button, Layout } from "antd";
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
  const handleExternalLink = (url: string) => {
    window.open(url, "_blank"); // открывает в новой вкладке
  };

  return (
      <Footer className={style.footer}>
        <p> © {new Date().getFullYear()} CodeConnect</p>
        <div className={style.secondContainer}>
          <div className={style.icons}>
            <Button
              className={style.button}
              onClick={() => handleExternalLink("https://www.youtube.com")}
            >
              <YoutubeOutlined />
            </Button>
          </div>
          <div className={style.icons}>
            <Button
              className={style.button}
              onClick={() => handleExternalLink("https://www.x.com")} // Замените на правильный URL
            >
              <XOutlined />
            </Button>
          </div>
          <div className={style.icons}>
            <Button
              className={style.button}
              onClick={() => handleExternalLink("https://www.instagram.com")}
            >
              <InstagramOutlined />
            </Button>
          </div>
          <div className={style.icons}>
            <Button
              className={style.button}
              onClick={() => handleExternalLink("https://www.facebook.com")}
            >
              <FacebookOutlined />
            </Button>
          </div>
          <div className={style.icons}>
            <Button
              className={style.button}
              onClick={() => handleExternalLink("https://www.linkedin.com")}
            >
              <LinkedinOutlined />
            </Button>
          </div>
        </div>
      </Footer>
  );
};
