import React from "react";
import { Layout } from "antd";
// import "./Footer.module.css";

const { Footer } = Layout;

export const FooterComponent: React.FC = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        bottom: "0",
        position: "fixed",
        width: "100%",
        backgroundColor: "#001529",
        color: "white",
      }}
    >
      <p> © {new Date().getFullYear()} CodeConnect</p>
    </Footer>
  );
};
