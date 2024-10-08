import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "./Layout/Layout";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
import { PublicRoute } from "@/shared/ui/PublicRoute";
import {
  MainPage,
  SignInPage,
  SignUpPage,
  UserPage,
  UserStackPage,
} from "@/pages";
import { ErrorPage } from "@/pages/ErrorPage";
import { CompanyPage } from "@/pages/CompanyPage";
import CompanyDetails from "@/widgets/CompanyDetails/CompanyDetails";
import { UsersPage } from "@/pages/UsersPage";
import { TestPage } from "@/pages/TestPage";

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
        path: `${ROUTES.COMPANY}/:id`,
        element: (
          <ProtectedRoute>
            <CompanyDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.TESTS,
        element: (
          <ProtectedRoute>
            <TestPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.ERROR,
        element: <ErrorPage />,
      },
    ],
  },
]);
