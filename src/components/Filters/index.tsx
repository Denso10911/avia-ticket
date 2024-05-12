import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"

import Checkbox from "../Checkbox"
import DrawerMobile from "../DrawerMobile"

import filterIcon from "../../assets/images/filter.svg"

import "./filters.scss"

interface Filter {
  id: number
  label: string
  value: string
}

const filtersList: Filter[] = [
  { id: 1, label: "Всі", value: "all" },
  { id: 2, label: "Без пересадок", value: "0" },
  { id: 3, label: "1 пересадка", value: "1" },
  { id: 4, label: "2 пересадки", value: "2" },
  { id: 5, label: "3 пересадки", value: "3" },
]

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const destinations = searchParams.get("destinations")?.split(",") || []

  const [visible, setVisible] = useState(false)

  const handleCheckboxChange = (value: string) => {
    let updatedDestinations: string[]

    if (value === "all") {
      updatedDestinations = []
    } else if (destinations.includes(value)) {
      updatedDestinations = destinations.filter((el: string) => el !== value)
    } else {
      updatedDestinations = [...destinations, value]
    }

    const params = new URLSearchParams(searchParams)
    if (updatedDestinations.length) {
      params.set("destinations", updatedDestinations.join(","))
    } else {
      params.delete("destinations")
    }
    setSearchParams(params, { replace: true })
  }

  return (
    <DrawerMobile icon={filterIcon} visible={visible} setVisible={setVisible}>
      <div className="filters">
        <div className="filters__title">Кількість пересадок</div>
        <ul className="filters__list">
          {filtersList.map(el => {
            const isChecked = destinations.length
              ? destinations.includes(el.value)
              : el.value === "all"
            return (
              <li key={el.id}>
                <label className="filters__item">
                  <Checkbox checked={isChecked} onChange={() => handleCheckboxChange(el.value)} />
                  <span className="filters__label">{el.label}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </DrawerMobile>
  )
}

export default Filters
