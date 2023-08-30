/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ children, isAllowed }) => {
  if (!isAllowed) {
    window.alert("Conectase para acceder a su pagina de perfil");
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};
