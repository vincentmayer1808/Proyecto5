// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/ServicesPage'
import { ContactPage } from '../pages/ContactPage'
import { ReservationPage } from '../pages/ReservationPage'
import { ConsultorPage } from '../pages/ConsultorPage'
import { CoachingPage } from '../pages/CoachingPage'
import { CapacitationPage } from '../pages/CapacitationPage'
import { ReclutPage } from '../pages/ReclutPage'
import { AsesoryPage } from '../pages/AsesoryPage'

export const MainRouter = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/ServicesPage" element={<ServicesPage />} />
    <Route path="/ContactPage" element={<ContactPage />} />
    <Route path="/ReservationPage" element={<ReservationPage />} />

   <Route path="/ConsultorPage" element={<ConsultorPage />} />
    <Route path="/CoachingPage" element={<CoachingPage />} />
    <Route path="/CapacitationPage" element={<CapacitationPage />} />
    <Route path="/ReclutPage" element={<ReclutPage />} />
    <Route path="/AsesoryPage" element={<AsesoryPage />} />
    </Routes>
    </>
  )
}
