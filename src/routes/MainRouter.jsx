/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";

import {
  HomePage,
  ServicePage,
  RegisterPage,
  UserPage,
  ServicesPage,
  ContactPage,
 
} from "../pages";
import { useContext, useState } from "react";
import { ServicesContext } from "../context/services/servicesContext";

import { useEffect } from "react";
import axios from "axios";
import { types } from "../context/services/servicesReducer";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const MainRouter = ({ user }) => {
  const [state, dispatch] = useContext(ServicesContext);
  const [therapie, setTherapie] = useState([]);
  const [coaching, setCoaching] = useState([]);
  const [program, setProgram] = useState([]);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
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
    fetchServices();
  }, []);

  useEffect(() => {
    if (user?.user?.role === "USER_ROLE") {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  }, [user]);

  useEffect(() => {
    setTherapie(
      state?.services?.filter((service) => service.categorie === "terapia")
    );
    setCoaching(
      state?.services?.filter((service) => service.categorie === "coaching")
    );
    setProgram(
      state?.services?.filter((service) => service.categorie === "programa")
    );
  }, [state]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              therapie={therapie}
              coaching={coaching}
              program={program}
            />
          }
        />
        <Route
          path="/ServicesPage"
          element={
            <ServicesPage
              therapie={therapie}
              coaching={coaching}
              program={program}
            />
          }
        />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route
          path="/RegisterPage"
          element={
            <RegisterPage
              therapie={therapie}
              coaching={coaching}
              program={program}
            />
          }
        />
        <Route
          path="/Service/:type"
          element={
            <ServicePage
              user={user}
              state={state}
              therapie={therapie}
              coaching={coaching}
              program={program}
            />
          }
        />

        <Route element={<ProtectedRoutes isAllowed={isAllowed} />}>
          <Route
            path="/UserPage"
            element={
              <UserPage
                user={user}
                therapie={therapie}
                coaching={coaching}
                program={program}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
