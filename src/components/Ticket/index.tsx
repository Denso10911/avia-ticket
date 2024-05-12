import React from "react"

import TicketDestination from "../TicketDestination"
import { CurrencyEnum } from "../../utilities/emuns"
import { SelectedTicketT } from "../../types/tickets"

import airline from "../../assets/images/airline.png"

import "./ticket.scss"

interface Props {
  ticket: SelectedTicketT
}

const Ticket: React.FC<Props> = ({ ticket }) => {
  const { forward, back } = ticket
  return (
    <div className="ticket">
      <div className="ticket__header">
        <p className="ticket__price">
          {ticket.price} {CurrencyEnum[ticket.currency]}
        </p>
        <img className="ticket__airlane" src={airline} alt="airlane logo" />
      </div>
      <div className="ticket__body">
        <TicketDestination
          destination={forward.destination}
          period={forward.period}
          time={forward.time}
          layovers={forward.layovers}
        />
        <TicketDestination
          destination={back.destination}
          period={back.period}
          time={back.time}
          layovers={back.layovers}
        />
      </div>
    </div>
  )
}

export default Ticket
