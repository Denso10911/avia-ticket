import React from "react"
import { Outlet } from "react-router"
import { Header } from "../../components"

interface Props {}

const MainLayout: React.FC<Props> = () => {
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
