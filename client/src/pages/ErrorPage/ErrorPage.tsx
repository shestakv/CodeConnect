import Error from "@/shared/ui/Error/Error";
// import { Flex, Button } from "antd";
import React from "react";
import styles from "./ErrorPage.module.css";


export const ErrorPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Error />
    </div>
  );
};

export default ErrorPage;
