import { useContext, useState } from "react";
import { UserContext } from "../../context/user/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { types } from "../../context/user/userReducer";

export const User = () => {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const initForm = {
    username: state.user.username,
    email: state.user.email,
    phone: state.user.phone,
  };

  const [formState, setFormState] = useState(initForm);

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    const spinner = document.getElementById("userSpinner");
    spinner.classList.remove("visually-hidden");
    setIsDisabled(true);
    const userId = state.user._id;
    const token = localStorage.getItem("token");
    if (!window.confirm("Estas seguro de querer eliminar tu perfil?")) {
      return;
    }
    try {
      await axios.delete(
        `https://diversos-consultora.onrender.com/users/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Token ${token}`,
          },
        }
      );
      spinner.classList.add("visually-hidden");
      navigate("/");
      setIsDisabled(false);
      dispatch({
        type: types.desconectUser,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };

  const editUser = async (e) => {
    e.preventDefault();
    const spinner = document.getElementById("userSpinner");
    spinner.classList.remove("visually-hidden");
    setIsDisabled(true);
    const token = localStorage.getItem("token");
    try {
      const userId = state.user._id;
      const { data } = await axios.put(
        `https://diversos-consultora.onrender.com/users/${userId}`,
        { userUpdated: formState },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Token ${token}`,
          },
        }
      );
      window.alert("usuario editado");
      setIsDisabled(false);
      spinner.classList.add("visually-hidden");
      dispatch({
        type: types.setUserState,
        payload: data.detail,
      });
    } catch (err) {
      console.log(err);
      window.alert("error en editar usuario");
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };

  return (
    <div className="container-fluid bg-light text-dark rounded">
      <form>
        <h2 className="text-center">Revise su perfil</h2>
        <div className="form-group g-3">
          <label className="col-form-label mx-2" htmlFor="username">Su nombre : </label>
          <input
            className="form-control shadow"
            name="username"
            value={formState.username}
            onChange={onChangeForm}
          />
        </div>
        <div className="form-group g-3">
          <label className="col-form-label mx-2" htmlFor="email">Su correo :</label>
          <input
            className="form-control shadow"
            name="email"
            value={formState.email}
            onChange={onChangeForm}
          />
        </div>
        <div className="form-group g-3">
          <label className="col-form-label mx-2" htmlFor="phone">Su telefono :</label>
          <input
            className="form-control shadow"
            name="phone"
            type="number"
            value={formState.phone}
            onChange={onChangeForm}
          />
        </div>
        <button
          className="btn btn-primary d-grid col-6 mx-auto mt-2 shadow"
          type="submit"
          disabled={isDisabled}
          onClick={editUser}
        >
          Editar perfil
        </button>
        <button
          className="btn btn-danger d-grid col-6 mx-auto mt-2 shadow"
          type="submit"
          disabled={isDisabled}
          onClick={deleteUser}
        >
          Eliminar perfil
        </button>
        <div
          id="userSpinner"
          className="visually-hidden d-flex justify-content-center text-primary mt-2"
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </form>
    </div>
  );
};
