import { Flex } from "antd";

export default function Error(): JSX.Element {
  return (
    <Flex justify="center" align="center" style={{ marginTop: "30px" }}>
      <div className="card glow-card">
        <h1>404 - это значит</h1>
        <img src="404.jpg" style={{ height: "400px" }} alt="" />
        <h1>такой страницы не существует!</h1>
      </div>
    </Flex>
  );
}
