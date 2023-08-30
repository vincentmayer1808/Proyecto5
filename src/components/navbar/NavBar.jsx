/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Login } from "../login/Login";
// import { useContext } from "react";
// import { UserContext } from "../../context/user/userContext";

export const NavBar = ({user, login, logout}) => {
  // const [state] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Inicio
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/ServicesPage">
            Nuestros Servicios
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/ReservationPage">
            Reservación
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/ContactPage">
            Contacto
          </NavLink>
        </div>
        {user?.user ? (
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/UserPage">
          Su Perfil
        </NavLink>
           
          </div>
        ) : (
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/RegisterPage">
              Registrarse
            </NavLink>
          </div>
        )}
      </div>
      <div>
        <Login user={user} login={login} logout={logout} />
      </div>
    </nav>
  );
};
