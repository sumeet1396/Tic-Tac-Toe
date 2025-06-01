import { Navigate } from "react-router-dom";
import { getUser } from "../helper/helper";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = getUser();
  console.log(user);
  if (user) return children;
  else return <Navigate to={"/create-profile"} replace />;
};

export default ProtectedRoute;
