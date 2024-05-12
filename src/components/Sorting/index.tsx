import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import cn from "classnames"

import DrawerMobile from "../DrawerMobile"

import sortIcon from "../../assets/images/sort.svg"
import "./sorting.scss"

const sortingList = [
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

const Sorting = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get("sort") || "price"

  const [visible, setVisible] = useState(false)

  const handleTabClick = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", value)
    setSearchParams(params, { replace: true })
    setVisible(false)
  }

  return (
    <DrawerMobile icon={sortIcon} visible={visible} setVisible={setVisible}>
      <div className="sorting">
        <div className="sorting__title">Порядок квитків</div>
        <ul className="sorting__list">
          {sortingList.map(el => {
            return (
              <li
                className={cn("sorting__item", sort === el.value && "sorting__item_active")}
                key={el.id}
                onClick={() => handleTabClick(el.value)}
              >
                {el.label}
              </li>
            )
          })}
        </ul>
      </div>
    </DrawerMobile>
  )
}

export default Sorting
