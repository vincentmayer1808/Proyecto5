// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/ServicesPage'
import { ContactPage } from '../pages/ContactPage'
import { ReservacionPage } from '../pages/ReservacionPage'
import { ConsultoraPage } from '../pages/ConsultoraPage'
import { CoachingPage } from '../pages/CoachingPage'
import { CapacitacionPage } from '../pages/CapacitacionPage'
import { ReclutamientoPage } from '../pages/ReclutamientoPage'
import { AsesoriaPage } from '../pages/AsesoriaPage'

export const MainRouter = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/ServicesPage" element={<ServicesPage />} />
    <Route path="/ConsultoraPage" element={<ConsultoraPage />} />
    <Route path="/CoachingPage" element={<CoachingPage />} />
    <Route path="/CapacitacionPage" element={<CapacitacionPage />} />
    <Route path="/ReclutamientoPage" element={<ReclutamientoPage />} />
    <Route path="/AsesoriaPage" element={<AsesoriaPage />} />
    <Route path="/ContactPage" element={<ContactPage />} />
    <Route path="/ReservacionPage" element={<ReservacionPage />} />


    </Routes>
    </>
  )
}
