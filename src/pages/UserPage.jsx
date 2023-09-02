/* eslint-disable react/prop-types */
import { ServiceList } from "../components/services/servicelist/ServiceList";
import { User } from "../components/user/User";
import { Navigate } from "react-router-dom";
import { Cart } from "../components/cart/Cart";

export const UserPage = ({user, therapie, coaching, program}) => {
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
