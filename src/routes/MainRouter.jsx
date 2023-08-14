// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/ServicesPage'
import { ContactPage } from '../pages/ContactPage'
import { ReservationPage } from '../pages/ReservationPage'
import { RegisterPage } from '../pages/RegisterPage'

import { TherapyPage } from '../pages/TherapyPage'
import { CoachingPage } from '../pages/CoachingPage'
import { CapacitationPage } from '../pages/CapacitationPage'
import { ProgramPage } from '../pages/ProgramPage'

export const MainRouter = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/ServicesPage" element={<ServicesPage />} />
    <Route path="/ContactPage" element={<ContactPage />} />
    <Route path="/ReservationPage" element={<ReservationPage />} />
    <Route path="/RegisterPage" element={<RegisterPage />} />
  

   <Route path="/TherapyPage" element={<TherapyPage />} />
    <Route path="/CoachingPage" element={<CoachingPage />} />
    <Route path="/CapacitationPage" element={<CapacitationPage />} />
    <Route path="/ProgramPage" element={<ProgramPage />} />
    </Routes>
    </>
  )
}
