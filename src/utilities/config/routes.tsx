import React from "react"

import { NotFound, Dashboard } from "../../pages"

const routesList = [
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
]

export { routesList }
