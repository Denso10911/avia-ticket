import React from "react"
import { useSearchParams } from "react-router-dom"
import cn from "classnames"

import "./tabs.scss"

const tabsList = [
  {
    id: 1,
    label: "Найдешевний",
    value: "price",
  },
  {
    id: 2,
    label: "Найшвидший",
    value: "time",
  },
  {
    id: 3,
    label: "Оптимальный",
    value: "optimal",
  },
]

const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get("sort") || "price"

  const handleTabClick = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", value)
    setSearchParams(params, { replace: true })
  }

  return (
    <div className="tabs">
      {tabsList.map(el => {
        return (
          <div
            className={cn("tabs__item", sort === el.value && "tabs__item_active")}
            key={el.id}
            onClick={() => handleTabClick(el.value)}
          >
            {el.label}
          </div>
        )
      })}
    </div>
  )
}

export default Tabs
