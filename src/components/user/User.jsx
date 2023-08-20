import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const [state] = useContext(UserContext);
const navigate = useNavigate()

//   const deleteUser = async (e) => {
//     e.preventDefault();
// try{
//     const {data}= await axios.delete("https://diversos-consultora.onrender.com/users/")
// } catch(err){

// }
// };
// const editUser = (e) => {
//   e.preventDefault();
// };
if (state.user){

  return (
    <div>
      {state?.user ? (
        <form>
          <h2>Revise su perfil</h2>
          <div>
            <label>Su nombre :</label>
            <input defaultValue={state.user.username} />
          </div>
          <div>
            <label>Su correo :</label>
            <input defaultValue={state.user.email} />
            {}
          </div>
          <div>
            <label>Su telefono :</label>
            <input defaultValue={state.user.phone} />
          </div>
          {/* <button type="submit" onClick={editUser}>
            Editar perfil
          </button>
          <button type="submit" onClick={deleteUser}>
            Eliminar perfil
          </button> */}
        </form>
      ) : (
        <div>
          <p>Error en cargar el usuario</p>
        </div>
      )}
    </div>
  );
  
}else{
navigate('/')
}
}