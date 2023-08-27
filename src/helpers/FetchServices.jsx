import axios from "axios";
import { useContext } from "react";
import { ServicesContext } from "../context/services/servicesContext";
import { types } from "../context/services/servicesReducer";

export const FetchServices = async () => {
    const[,dispatch]=useContext(ServicesContext)
    try {
      const { data } = await axios.get(
        "https://diversos-consultora.onrender.com/services",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: types.setServicesState,
        payload: data.detail,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };