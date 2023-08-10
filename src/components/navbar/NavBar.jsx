
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Inicio
          </NavLink>
        </div>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/servicesPage">
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
      </div>
    </nav>
  );
};
