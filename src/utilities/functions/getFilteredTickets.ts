import { TicketT } from "../../types/tickets"

export const getFilteredTickets = (tickets: TicketT[], destinations: string): TicketT[] => {
  const destinationsArr = destinations.split(",")

  return tickets.filter(el => {
    return destinationsArr.includes(String(el.destination_count))
  })
}
