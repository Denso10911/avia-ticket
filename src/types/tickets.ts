import { CurrencyT } from "./general"

export type TicketSearchParamsT = {
  sort: string | null
  filter: {
    destinations: string | null
  }
  pageSize: number
}

export type LayoverT = {
  id: number
  country_from: string
  country_to: string
  date_from: string
  date_to: string
}

export type DestinationT = Omit<LayoverT, "id"> & {
  layovers: LayoverT[]
}

export type TicketT = {
  id: number
  price: number
  currency: CurrencyT
  ticket_date: string
  destination_count: number
  duration: number
  forward_destination: DestinationT
  back_destination: DestinationT
}

type SelectedDestinationT = {
  destination: string
  period: string
  time: string
  layovers: string[]
}

export type SelectedTicketT = Pick<TicketT, "id" | "price" | "currency"> & {
  forward: SelectedDestinationT
  back: SelectedDestinationT
}
