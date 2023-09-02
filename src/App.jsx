import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { MainRouter } from "./routes/MainRouter";
import { UserContext } from "./context/user/userContext";
import { types } from "./context/user/userReducer";
import jwt from "jwt-decode";
import axios from "axios";

function App() {
  const [state, dispatch] = useContext(UserContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const connectToDB = async (formState) => {
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
      const token = data.token;
      localStorage.setItem("token", token);
      const decodedToken = jwt(data.token);
      window.alert("usuario loggeado");
      dispatch({
        type: types.setUserState,
        payload: decodedToken,
      });
    } catch (err) {
      window.alert("error en loguear usuario");
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
      window.alert("Usuario desconectado");
      dispatch({
        type: types.desconectUser,
      });
    } catch (err) {
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };

  useEffect(() => {
    setUser(state);
  }, [state]);

  return (
    <>
      <NavBar user={user} login={connectToDB} logout={logout} />
      <MainRouter user={user} />
      <Footer />
    </>
  );
}

export default App;
