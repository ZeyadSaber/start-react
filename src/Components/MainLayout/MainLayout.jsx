import React from 'react'
import { Outlet } from 'react-router-dom'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'
import { Home } from '../Home/Home'
import { Navbar } from '../Navbar/Navbar'
import { Portfolio } from '../Portfolio/Portfolio'

export const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
    </>
  )
}
