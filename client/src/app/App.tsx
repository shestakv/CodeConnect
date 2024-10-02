import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import store from "./store/store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider >
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
    </>
  );
}

export default App;
