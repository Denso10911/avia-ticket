import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getTicketsSelector } from "../../redux/slices/Tickets/selectors"
import { TicketSearchParamsT } from "../../types/tickets"
import { getTickets } from "../../redux/slices/Tickets/actions"
import Ticket from "../../components/Ticket"

import "./dashboard.scss"
import { Button, Filters } from "../../components"
import { useSearchParams } from "react-router-dom"
import Tabs from "../../components/Tabs"

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const tickets = useAppSelector(getTicketsSelector)
  const { totalCount, loading } = useAppSelector(state => state.tickets)
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

  const handleButtonClick = () => {
    setPageSize(prev => prev + 5)
  }

  return (
    <div className="dashboard">
      <div className="dashboard__aside">
        <Filters />
      </div>
      <div className="dashboard__body">
        <Tabs />
        {tickets.map(el => (
          <Ticket ticket={el} key={el.id} />
        ))}
        {totalCount > tickets.length && (
          <Button
            text="показати ще 5 квитків"
            onClick={handleButtonClick}
            type="button"
            loading={loading}
          />
        )}
      </div>
    </div>
  )
}

export default Dashboard
