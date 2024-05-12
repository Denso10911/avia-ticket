import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getTicketsSelector } from "../../redux/slices/Tickets/selectors"
import { TicketSearchParamsT } from "../../types/tickets"
import { getTickets } from "../../redux/slices/Tickets/actions"
import Ticket from "../../components/Ticket"

import "./dashboard.scss"
import { Filters } from "../../components"
import { useSearchParams } from "react-router-dom"

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const tickets = useAppSelector(getTicketsSelector)

  const destinations = searchParams.get("destinations")
  const sort = searchParams.get("sort")

  useEffect(() => {
    const searchParams: TicketSearchParamsT = {
      sort,
      filter: {
        destinations,
      },
    }
    dispatch(getTickets(searchParams))
  }, [destinations, sort])

  return (
    <div className="dashboard">
      <div className="dashboard__aside">
        <Filters />
      </div>
      <div className="dashboard__body">
        {tickets.map(el => (
          <Ticket ticket={el} key={el.id} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
