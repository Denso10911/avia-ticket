import dayjs from "dayjs"
import { LayoverT } from "../../types/tickets"

export const getDestinationPeriod = (from: string, to: string) =>
  `${dayjs(from).format("HH:mm")} – ${dayjs(to).format("HH:mm")}`

export const getDestinationTime = (from: string, to: string) => {
  const firstDate = dayjs(from)
  const secondDate = dayjs(to)

  const difference = secondDate.diff(firstDate, "minute")

  const days = Math.floor(difference / (60 * 24))
  const hours = Math.floor((difference % (60 * 24)) / 60)
  const minutes = difference % 60

  let time = ""

  if (days) time += `${days}д `
  if (hours) time += `${hours}г `
  if (minutes) time += `${minutes}хв`

  return time
}

export const getDestinationLayovers = (layovers: LayoverT[]) => {
  const layoverCountries = layovers.reduce((acc: string[], layover) => {
    if (!acc.includes(layover.country_from)) {
      acc.push(layover.country_from)
    }
    if (!acc.includes(layover.country_to)) {
      acc.push(layover.country_to)
    }
    return acc
  }, [])

  layoverCountries.pop()
  layoverCountries.shift()
  return layoverCountries
}
