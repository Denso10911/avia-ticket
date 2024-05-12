import { RootState } from "../../store"
import { SelectedTicketT } from "../../../types/tickets"
import {
  getDestinationLayovers,
  getDestinationPeriod,
  getDestinationTime,
} from "../../../utilities/functions/getDestinationValues"

export const getTicketsSelector = (state: RootState): SelectedTicketT[] =>
  state.tickets.tickets.map(el => ({
    id: el.id,
    price: el.price,
    currency: el.currency,
    duration: el.duration,
    forward: {
      destination: `${el.forward_destination.country_from} - ${el.forward_destination.country_to}`,
      period: getDestinationPeriod(
        el.forward_destination.date_from,
        el.forward_destination.date_to,
      ),
      time: getDestinationTime(el.forward_destination.date_from, el.forward_destination.date_to),
      layovers: getDestinationLayovers(el.forward_destination.layovers),
    },
    back: {
      destination: `${el.back_destination.country_from} - ${el.back_destination.country_to}`,
      period: getDestinationPeriod(el.back_destination.date_from, el.back_destination.date_to),
      time: getDestinationTime(el.back_destination.date_from, el.back_destination.date_to),
      layovers: getDestinationLayovers(el.back_destination.layovers),
    },
  }))
