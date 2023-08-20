/*eslint-disable react/prop-types*/
import { ServicesContext } from "./servicesContext";
import { useReducer } from "react";
import servicesReducer from "./servicesReducer";

export const ServicesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(servicesReducer, null);
  return (
    <ServicesContext.Provider value={[state, dispatch]}>
      {children}
    </ServicesContext.Provider>
  );
};
