import { TicketSearchParamsT, TicketT } from "../../types/tickets"

import mockTickets from "../../../public/tickets.json"
import { getSortedTickets } from "./getSortedTickets"
import { getFilteredTickets } from "./getFilteredTickets"

export const simulateTicketsRequest = async (searchParams: TicketSearchParamsT) => {
  // i try to simulate filtration and sorting like on BE side

  await new Promise(resolve => setTimeout(resolve, 500))

  const { filter, sort, pageSize } = searchParams

  const allTickets = JSON.parse(JSON.stringify(mockTickets))

  let resultTickets: TicketT[] = [...allTickets]

  if (filter.destinations) {
    resultTickets = getFilteredTickets(resultTickets, filter.destinations)
  }

  if (sort) {
    resultTickets = getSortedTickets(resultTickets, sort)
  }

  return { data: resultTickets.slice(0, pageSize), total_count: resultTickets.length }
}
