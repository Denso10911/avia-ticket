import React from "react"
import { Route, Routes } from "react-router-dom"
import { routesList } from "../utilities/config/routes"
import MainLayout from "../layouts/MainLayout"

const RoutesComp = () => {
  return (
    <Routes>
      {routesList.map((el, key) => {
        return (
          <Route key={`route-key-${key}`} element={<MainLayout />}>
            <Route path={el.path} element={el.component} />
          </Route>
        )
      })}
    </Routes>
  )
}

export default RoutesComp
