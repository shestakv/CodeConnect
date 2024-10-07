import { Flex } from "antd";
import styles from "./Error.module.css";
export default function Error(): JSX.Element {
  return (
    <Flex justify="center" align="center" style={{ marginTop: "30px" }}>
      <div className={styles.container}>
        <h1>Error 404</h1>
        <img src="/404.gif" style={{ height: "400px", borderRadius: "50px" }} alt="" />
      </div>
    </Flex>
  );
}
