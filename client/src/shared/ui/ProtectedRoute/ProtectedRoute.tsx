import React from "react";
import Loader from "../Loader/Loader";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { loading } = useAppSelector((state) => state.user);

  if (loading) {
    return <Loader />;
  }
  return children;
};
