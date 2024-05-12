import React from "react"
import { Outlet } from "react-router"
import { Header } from "../../components"

import "./main-layout.scss"

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
