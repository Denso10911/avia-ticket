import React, { Dispatch, SetStateAction } from "react"
import { useSearchParams } from "react-router-dom"
import cn from "classnames"

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
interface Props {
  setVisible?: Dispatch<SetStateAction<boolean>>
}

const Sorting: React.FC<Props> = ({ setVisible }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get("sort") || "price"

  const handleTabClick = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", value)
    setSearchParams(params, { replace: true })

    if (setVisible) setVisible(false)
  }

  return (
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
  )
}

export default Sorting
