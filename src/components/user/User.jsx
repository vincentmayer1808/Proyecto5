import { useContext, useState } from "react";
import { UserContext } from "../../context/user/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { types } from "../../context/user/userReducer";

export const User = () => {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
const [isDisabled, setIsDisabled] = useState(false)
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
    setIsDisabled(true)
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
      navigate("/");
      setIsDisabled(false)
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
    setIsDisabled(true)
    const token = localStorage.getItem("token");
    try {
      const userId = state.user._id;
      const { data } = await axios.put(
        `http://localhost:5174/users/${userId}`,
        { userUpdated: formState },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Token ${token}`,
          },
        }
      );
      window.alert("usuario editado");
      setIsDisabled(false)
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
    <div>
      <form>
        <h2>Revise su perfil</h2>
        <div>
          <label htmlFor="username">Su nombre :</label>
          <input
            name="username"
            value={formState.username}
            onChange={onChangeForm}
          />
        </div>
        <div>
          <label htmlFor="email">Su correo :</label>
          <input name="email" value={formState.email} onChange={onChangeForm} />
        </div>
        <div>
          <label htmlFor="phone">Su telefono :</label>
          <input
            name="phone"
            type="number"
            value={formState.phone}
            onChange={onChangeForm}
          />
        </div>
        <button type="submit" disabled={isDisabled} onClick={editUser}>
          Editar perfil
        </button>
        <button type="submit" disabled={isDisabled} onClick={deleteUser}>
          Eliminar perfil
        </button>
      </form>
    </div>
  );
};
