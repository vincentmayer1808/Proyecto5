// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ServicesPage } from '../pages/ServicesPage'
import { ContactPage } from '../pages/ContactPage'
import { ReservacionPage } from '../pages/ReservacionPage'

export const MainRouter = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/ServicesPage" element={<ServicesPage />} />
    <Route path="/ContactPage" element={<ContactPage />} />
    <Route path="/ReservacionPage" element={<ReservacionPage />} />


    </Routes>
    </>
  )
}
