import axios from "axios";
import { types } from "../../context/user/userReducer";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user/userContext";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [, dispatch] = useContext(UserContext);
    const navigate = useNavigate;
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
  
      addToDB(formState);
      
    };
  
    const addToDB = async () => {
      console.log(formState);
      try {
        const { data } = await axios.post("https://diversos-consultora.onrender.com/users/login", formState, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        dispatch({
          type: types.setUserState,
          payload: data,
        });
        setFormState(initForm);
        window.alert('usuario loggeado')
        navigate('/Inicio')
      } catch (err) {
          console.log(err)
          window.alert('error en loguear usuario')
        dispatch({
          type: types.setError,
          payload: err,
        });
      }
    };
  
  return (
    
    <>
     <form action="submit">
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
        >
          Conectarse
        </button>
      </form>
    </>
  )
}
