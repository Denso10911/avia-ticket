import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getTicketsSelector } from "../../redux/slices/Tickets/selectors"
import { TicketSearchParamsT } from "../../types/tickets"
import { getTickets } from "../../redux/slices/Tickets/actions"
import Ticket from "../../components/Ticket"

interface Props {}

const Dashboard: React.FC<Props> = () => {
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
    <div>
      {tickets.map(el => (
        <Ticket ticket={el} key={el.id} />
      ))}
    </div>
  )
}

export default Dashboard
