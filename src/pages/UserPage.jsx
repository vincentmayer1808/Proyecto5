import { useContext } from "react";
import { ServiceList } from "../components/services/servicelist/ServiceList";
import { User } from "../components/user/User";
import { UserContext } from "../context/user/userContext";
import { Navigate } from "react-router-dom";
import { Cart } from "../components/cart/cart";

export const UserPage = () => {
  const [state] = useContext(UserContext);
  // const navigate = useNavigate();
 console.log(state)
  
    if (state === null) {
     return (

       <Navigate to="/"/>
       )
    } 
 
    return (
        <>
          <User />
          <Cart />
          <ServiceList />
        </>
      );
};
