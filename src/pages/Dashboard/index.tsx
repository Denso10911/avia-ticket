import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getTickets } from "../../redux/slices/Tickets/actions"
import { getTicketsSelector } from "../../redux/slices/Tickets/selectors"

import { TicketSearchParamsT } from "../../types/tickets"
import { Button, Filters, Sorting, Ticket } from "../../components"

import "./dashboard.scss"
import Tickets from "../../components/Tickets"

const Dashboard = () => {
  const dispatch = useAppDispatch()

  const [searchParams] = useSearchParams()

  const destinations = searchParams.get("destinations")
  const sort = searchParams.get("sort")

  const [pageSize, setPageSize] = useState(5)

  useEffect(() => {
    const searchParams: TicketSearchParamsT = {
      sort,
      filter: {
        destinations,
      },
      pageSize,
    }
    dispatch(getTickets(searchParams))
  }, [destinations, sort, pageSize])

  useEffect(() => {
    setPageSize(5)
  }, [destinations, sort])

  return (
    <div className="dashboard">
      <div className="dashboard__filters">
        <Filters />
      </div>
      <div className="dashboard__sort">
        <Sorting />
      </div>
      <div className="dashboard__data">
        <Tickets setPageSize={setPageSize} />
      </div>
    </div>
  )
}

export default Dashboard
