// import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { ContactPage } from "../pages/ContactPage";
import { ReservationPage } from "../pages/ReservationPage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";

import { ServicePage } from "../pages/ServicePage";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ReservationPage" element={<ReservationPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/UserPage" element={<UserPage />} />

        <Route path="/Service/:type" element={<ServicePage />} />
      </Routes>
    </>
  );
};
