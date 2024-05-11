import React, { useEffect } from "react"
import "./assets/styles/global"
import logo from "./assets/images/logo.png"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { getTickets } from "./redux/slices/Tickets/actions"
import { TicketSearchParamsT } from "./types/tickets"
import { getTicketsSelector } from "./redux/slices/Tickets/selectors"
import Ticket from "./components/Ticket"

const App = () => {
  const dispatch = useAppDispatch()

  const tickets = useAppSelector(getTicketsSelector)

  useEffect(() => {
    const searchParams: TicketSearchParamsT = {
      sort: "cheap",
      destination_count: null,
    }
    dispatch(getTickets(searchParams))
  }, [])

  return (
    <div className="container">
      <p className="paragraph">Hello</p>
      <img src={logo} alt="logo" />

      {tickets.map(el => (
        <Ticket ticket={el} key={el.id} />
      ))}
    </div>
  )
}

export default App
