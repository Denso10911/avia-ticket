import React, { Dispatch, SetStateAction } from "react"
import { Button, Ticket } from "../index"
import { useAppSelector } from "../../hooks/redux"
import { getTicketsSelector } from "../../redux/slices/Tickets/selectors"

import "./tickets.scss"

interface Props {
  setPageSize: Dispatch<SetStateAction<number>>
}

const Tickets: React.FC<Props> = ({ setPageSize }) => {
  const tickets = useAppSelector(getTicketsSelector)
  const { totalCount, loading } = useAppSelector(state => state.tickets)

  const handleButtonClick = () => {
    setPageSize(prev => prev + 5)
  }

  return (
    <div className="tickets">
      <ul className="tickets__list">
        {tickets.map(el => (
          <li key={el.id}>
            <Ticket ticket={el} />
          </li>
        ))}
      </ul>

      {totalCount > tickets.length && (
        <Button
          text="показати ще 5 квитків"
          onClick={handleButtonClick}
          type="button"
          loading={loading}
        />
      )}
    </div>
  )
}

export default Tickets
