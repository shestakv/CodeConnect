import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
import { PublicRoute } from "@/shared/ui/PublicRoute";
import { MainPage, SignInPage, SignUpPage, UserPage, UserStackPage } from "@/pages";
import { ErrorPage } from "@/pages/ErrorPage";
import { CompanyPage } from "@/pages/CompanyPage";
import { UsersPage } from "@/pages/UsersPage";

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
        path: ROUTES.USERS,
        element: (
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.USER_PERSONAL,
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.USER_STACKS,
        element: (
          <ProtectedRoute>
            <UserStackPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.COMPANY,
        element: (
          <ProtectedRoute>
            <CompanyPage />
          </ProtectedRoute>
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
