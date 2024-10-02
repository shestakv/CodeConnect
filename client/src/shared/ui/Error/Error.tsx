import { Flex } from "antd";

export default function Error(): JSX.Element {
  return (
    <Flex justify="center" align="center" style={{ marginTop: "30px" }}>
      <div className="card glow-card">
        <h1>Error</h1>
        <img src="404.gif" style={{ height: "400px" }} alt="" />
      </div>
    </Flex>
  );
}
