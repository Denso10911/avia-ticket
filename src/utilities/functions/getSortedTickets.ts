import { TicketT } from "../../types/tickets"

export const getSortedTickets = (tickets: TicketT[], sort: string): TicketT[] => {
  if (sort === "optimal") {
    return tickets.sort((a, b) => {
      if (a.duration !== b.duration) {
        return a.duration - b.duration
      }
      if (a.destination_count !== b.destination_count) {
        return a.destination_count - b.destination_count
      }
      return a.price - b.price
    })
  }

  if (sort === "time") {
    return tickets.sort((a, b) => {
      return a.duration - b.duration
    })
  }

  return tickets.sort((a, b) => {
    return a.price - b.price
  })
}
