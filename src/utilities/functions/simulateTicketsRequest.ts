import { TicketSearchParamsT } from "../../types/tickets"

import mockTickets from "../../../public/tickets.json"

export const simulateTicketsRequest = async (searchParams: TicketSearchParamsT) => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const { destination_count, sort } = searchParams

  return JSON.parse(JSON.stringify(mockTickets))
}
