/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { UserContext } from "../context/user/userContext";
import { ServiceList } from "../components/services/servicelist/ServiceList";
import { User } from "../components/user/User";
import { Navigate } from "react-router-dom";
import { Cart } from "../components/cart/cart";

export const UserPage = ({user, therapie, coaching, program}) => {
  // const [state] = useContext(UserContext);
  // const navigate = useNavigate();
 console.log(user)
  
    if (user === null) {
     return (

       <Navigate to="/"/>
       )
    } 
 
    return (
        <>
          <User />
          <Cart />
          <ServiceList  therapie={therapie} coaching={coaching} program={program}/>
        </>
      );
};
