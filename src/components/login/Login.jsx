import axios from "axios";
import jwt from "jwt-decode";
import { types } from "../../context/user/userReducer";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user/userContext";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useContext(UserContext);

  const initForm = {
    email: "",
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
    setIsLoading(true);
    addToDB(formState);
    setFormState(initForm);

    setIsLoading(false);
  };

  const addToDB = async () => {
    try {
      const { data } = await axios.post(
        "https://diversos-consultora.onrender.com/users/login",
        formState,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const decodedToken = jwt(data.token);
      window.alert("usuario loggeado");
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
  const logout = () => {
    try {
      dispatch({
        type: types.desconectUser,
        payload: null,
      });
    } catch (err) {
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };

  return (
    <>
      <div>
        {state?.user ? (
          <div>
            <h3>Bienvenido {state.user.username}</h3>
            <button
              className="btn btn-primary d-flex shadow"
              type="reset"
              id="desconectButton"
              onClick={logout}
              disabled={isLoading}
            >
              Desconectarse
            </button>
          </div>
        ) : (
          <form action="submit">
            <h3> Bienvenido, registrase o ingresa a su cuenta</h3>
            <div className="form-group ">
              <input
                className="form-control shadow"
                name="email"
                placeholder="Escribe su correo aquí"
                type="email"
                value={formState.email}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group">
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
              id="loginButton"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Conectarse
            </button>
          </form>
        )}
      </div>
    </>
  );
};
