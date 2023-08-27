import { useState, useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { types } from "../../context/user/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const initForm = {
    username: "",
    email: "",
    phone: "",
    password: "",
  };

  const [formState, setFormState] = useState(initForm);

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    
    const { username, password, email } = formState;
    if (username === "" || email === "" || password === "") {
      window.alert("Debe llenar los campos de nombre, correo y clave");
    } else {
    
      await addToDB(formState);
      setFormState(initForm);
    }
    setIsLoading(false)
  };

  const addToDB = async () => {
    try {
      const { data } = await axios.post(
        "https://diversos-consultora.onrender.com/users",
        formState,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = data.token
      localStorage.setItem("token", token)
      const decodedToken = jwt(token);
      window.alert("usuario loggeado");
      navigate("/");
      dispatch({
        type: types.setUserState,
        payload: decodedToken,
      });
    } catch (err) {
      console.log(err);
      window.alert("error en loguear usuario");
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };

  return (
    <>
      <div className="container-fluid bg-light text-dark rounded">
        <div className="text-center">
          <h2>Registrase</h2>
          <p>
            Registrase con este simple formulario para poder reservar su
            servicio
          </p>
        </div>
        <div className="p-3">
          <form action="submit">
            <div className="form-group g-3 ">
              <label className="col-form-label mx-2" htmlFor="username">
                Nombre
              </label>
              <input
                className="form-control col-auto shadow"
                name="username"
                type="text"
                placeholder="Escribe su nombre completo aquí"
                value={formState.username}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group g-3 ">
              <label className="col-form-label mx-2" htmlFor="email">
                Dirección de correo
              </label>
              <input
                className="form-control shadow"
                name="email"
                placeholder="Escribe su correo aquí"
                type="email"
                value={formState.email}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group g-3 ">
              <label className="col-form-label mx-2" htmlFor="phone">
                Numero de telefono
              </label>
              <input
                className="form-control shadow"
                name="phone"
                placeholder="Escribe su numero de telefono"
                type="number"
                value={formState.phone}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group g-3">
              <label className="col-form-label mx-2" htmlFor="consult">
                Clave
              </label>
              <input
                className="form-control shadow"
                name="password"
                placeholder="Escribe su clave secreta"
                type="password"
                value={formState.password}
                onChange={onChangeForm}
              />
            </div>

            <button
              className="btn btn-primary d-grid col-6 mx-auto mt-2 shadow"
              type="submit"
              id="contact"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Registrase
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
