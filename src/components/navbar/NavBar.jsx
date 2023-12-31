/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Login } from "../login/Login";
import "./navbar.css";

export const NavBar = ({ user, login, logout }) => {
  return (
    <nav className="navbar navbar-dark d-flex  align-items-center justify-content-evenly bg-primary px-2">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="text-light border border-light d-flex flex-column justify-content-center align-items-center p-2">
          <div >
            <img src="../../assets/image/logo.png" alt="logo" className="height"/>
          </div>
          <p>psicologialosrios@gmail.com</p>
          <p>123-456-7890</p>
        </div>
        <div className="navbar-expand-sm d-flex flex-column ">
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
        </div>
      </div>
      <div>
        <Login user={user} login={login} logout={logout} />
      </div>
    </nav>
  );
};
