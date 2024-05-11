import React from "react"
import "./ticket-destination.scss"
import { getTransfersCountWord } from "../../utilities/functions/getTransfersCountWord"

interface Props {
  destination: string
  period: string
  time: string
  layovers: string[]
}

const TicketDestination: React.FC<Props> = ({ destination, period, time, layovers }) => {
  const destinationData = [
    { id: 1, title: destination, value: period },
    { id: 2, title: "в дорозі", value: time },
    {
      id: 3,
      title: `${layovers.length || "без"} ${getTransfersCountWord(layovers.length)}`,
      value: layovers.join(", "),
    },
  ]
  return (
    <div className="ticket-destination">
      {destinationData.map(el => (
        <div className="ticket-destination__column" key={el.id}>
          <div className="ticket-destination__label">{el.title}</div>
          <div className="ticket-destination__value">{el.value}</div>
        </div>
      ))}
    </div>
  )
}

export default TicketDestination
