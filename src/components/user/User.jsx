import { useContext, useState } from "react";
import { UserContext } from "../../context/user/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { types } from "../../context/user/userReducer";

export const User = () => {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();

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
    const userId = state.user._id;
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this reservation?")) {
      return;
    }
    try {
      const { data } = await axios.delete(
        `https://diversos-consultora.onrender.com/users/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Token ${token}`,
          },
        }
      );
      console.log(data);

      navigate("/");
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
    console.log(state);
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
      console.log(data);
      window.alert("usuario editado");
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
        <button type="submit" onClick={editUser}>
          Editar perfil
        </button>
        <button type="submit" onClick={deleteUser}>
          Eliminar perfil
        </button>
      </form>
    </div>
  );
};
