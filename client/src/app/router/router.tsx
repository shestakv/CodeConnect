import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
import { PublicRoute } from "@/shared/ui/PublicRoute";
import { MainPage, SignInPage, SignUpPage } from "@/pages";
import { ErrorPage } from "@/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <MainPage />,
      },
      {
        path: ROUTES.SIGNIN,
        element: (
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.SIGNUP,

        element: (
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.ERROR,
        element: <ErrorPage />,
      },
      // {
      //   path: "test",
      //   async lazy() {
      //     const { GamePage } = await import("@/pages/GamePage");
      //     return { Component: GamePage };
      //   },
      // },
    ],
  },
]);
