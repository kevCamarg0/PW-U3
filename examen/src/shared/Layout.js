import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../componentes/Navbar'

export default function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}