/* eslint-disable react/prop-types */
import { useState } from "react";

export const Login = ({ user, login, logout }) => {
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <>
      <div>
        {user?.user ? (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-light">Bienvenid@ {user?.user.username}</h2>
            <button
              className="btn btn-light d-flex "
              type="reset"
              id="desconectButton"
              onClick={logout}
              disabled={isLoading}
            >
              Desconectarse
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-5">
            <h2 className="text-light text-center">
              Bienvenido, registrase o ingresa a su cuenta
            </h2>
            <div className="form-group px-5 mb-2">
              <input
                className="form-control shadow "
                name="email"
                placeholder="Escribe su correo aquí"
                type="email"
                value={formState.email}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group px-5">
              <input
                className="form-control shadow"
                name="password"
                placeholder="Escribe su clave secreta"
                type="password"
                value={formState.password}
                onChange={onChangeForm}
              />
            </div>
            {isLoading ? (
              
              <div
                id="spinner"
                className="d-flex justify-content-center text-light mt-2"
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
           
            ) : (
              <button
              className="btn btn-light d-grid col-6 mx-auto mt-2 shadow"
              type="submit"
              id="loginButton"
              
            >
              Conectarse
            </button>
            )}
          </form>
        )}
      </div>
    </>
  );
};
