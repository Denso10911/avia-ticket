import React, { useEffect } from "react"
import "./assets/styles/global"
import logo from "./assets/images/logo.png"
import { useAppDispatch } from "./hooks/redux"
import { getTickets } from "./redux/slices/Tickets/actions"
import { TicketSearchParamsT } from "./types/tickets"

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const searchParams: TicketSearchParamsT = {
      sort: "cheap",
      destination_count: null,
    }
    dispatch(getTickets(searchParams))
  }, [])

  return (
    <div className="container" style={{ color: "red" }}>
      <p className="paragraph">Hello</p>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default App
