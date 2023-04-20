import React from 'react'
import { Outlet } from 'react-router-dom'
import Navegacion from './Navegacion'

export default function Layout() {
  return (
    <>
        <Navegacion/>
        <Outlet/>
    </>
  )
}
