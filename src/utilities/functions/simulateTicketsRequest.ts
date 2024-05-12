import { TicketSearchParamsT, TicketT } from "../../types/tickets"

import mockTickets from "../../../public/tickets.json"
import { getSortedTickets } from "./getSortedTickets"
import { getFilteredTickets } from "./getFilteredTickets"

export const simulateTicketsRequest = async (searchParams: TicketSearchParamsT) => {
  await new Promise(resolve => setTimeout(resolve, 500))

  const { filter, sort } = searchParams

  const allTickets = JSON.parse(JSON.stringify(mockTickets))

  let resultTickets: TicketT[] = [...allTickets]

  if (filter.destinations) {
    resultTickets = getFilteredTickets(allTickets, filter.destinations)
  }

  if (searchParams.sort) {
    resultTickets = getSortedTickets(allTickets, searchParams.sort)
  }

  return resultTickets
}
