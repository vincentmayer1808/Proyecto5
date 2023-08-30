/* eslint-disable react/prop-types */
// import axios from "axios";
// import jwt from "jwt-decode";
// import { types } from "../../context/user/userReducer";
// import { UserContext } from "../../context/user/userContext";
// import { useNavigate } from "react-router-dom";
import {  useState } from "react";

export const Login = ({ user, login, logout }) => {
  const [isLoading, setIsLoading] = useState(false);
//   const [state, dispatch] = useContext(UserContext);
// const navigate =useNavigate()
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
    await login(formState);
    setIsLoading(false);
  };

  // const connectToDB = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "https://diversos-consultora.onrender.com/users/login",
  //       formState,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const token = data.token
  //     localStorage.setItem("token", token)
  //     const decodedToken = jwt(data.token);
  //     window.alert("usuario loggeado");
  //     navigate('/UserPage')
  //     dispatch({
  //       type: types.setUserState,
  //       payload: decodedToken,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     window.alert("error en loguear usuario");
  //     dispatch({
  //       type: types.setError,
  //       payload: err,
  //     });
  //   }
  // };
  // const logout = () => {
  //   try {
  //     localStorage.removeItem("token")
  //     navigate('/')
  //     window.alert("Usuario desconectado")
  //     dispatch({
  //       type: types.desconectUser,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: types.setError,
  //       payload: err,
  //     });
  //   }
  // };
// console.log(user)
  return (
    <>
      <div>
        {user?.user ? (
        
          <div>
          <h3 className="text-light">Bienvenid@ {user?.user.username}</h3>
          <button
            className="btn btn-primary d-flex "
            type="reset"
            id="desconectButton"
            onClick={logout}
            disabled={isLoading}
          >
            Desconectarse
          </button>
        </div>
        ) : (
          <form onSubmit={handleSubmit}>
          <h3 className="text-light">
            Bienvenido, registrase o ingresa a su cuenta
          </h3>
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
