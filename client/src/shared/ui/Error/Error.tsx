import { Flex } from "antd";
import styles from "./Error.module.css";
export default function Error(): JSX.Element {
  return (
    <Flex justify="center" align="center" >
      <div className={styles.container}>
        <h1 className={styles.title}>Error 404</h1>
        <img className={styles.elbrus} src="/elbrus.png"/>
        <img src="/404.gif" style={{ height: "700px", borderRadius: "60px" }} alt="" />
      </div>
    </Flex>
  );
}
