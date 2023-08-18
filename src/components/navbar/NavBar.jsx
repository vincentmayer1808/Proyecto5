import { NavLink } from "react-router-dom";
import { Login } from "../login/login";
import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";

export const NavBar = () => {
  const [state] = useContext(UserContext);
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
        {state?.user ? (
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
        <Login />
      </div>
    </nav>
  );
};
