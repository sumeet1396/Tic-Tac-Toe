import Home from "../Pages/Home";
import CreateProfile from "../Pages/CreateProfile";
import Game from "../Pages/Game";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/create-profile",
    element: <CreateProfile />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/game/:id",
    element: (
      <ProtectedRoute>
        <Game />
      </ProtectedRoute>
    ),
  },
];

export default routes;
