import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { useAppDispatch } from "../../hooks/redux"
import { getTickets } from "../../redux/slices/Tickets/actions"

import { TicketSearchParamsT } from "../../types/tickets"
import { Filters, Sorting, Drawer } from "../../components"

import Tickets from "../../components/Tickets"
import useMatchMedia from "../../hooks/useMatchMedia"

import filterIcon from "../../assets/images/filter.svg"
import sortIcon from "../../assets/images/sort.svg"

import "./dashboard.scss"

const Dashboard = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const [isMobile] = useMatchMedia(540)

  const destinations = searchParams.get("destinations")
  const sort = searchParams.get("sort")

  const [pageSize, setPageSize] = useState(5)
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [sortingVisible, setSortingVisible] = useState(false)

  useEffect(() => {
    const searchParams: TicketSearchParamsT = {
      sort,
      filter: {
        destinations,
      },
      pageSize,
    }
    dispatch(getTickets(searchParams))
  }, [destinations, sort, pageSize])

  useEffect(() => {
    setPageSize(5)
  }, [destinations, sort])

  return (
    <div className="dashboard">
      <div className="dashboard__filters">
        {isMobile ? (
          <Drawer icon={filterIcon} visible={filtersVisible} setVisible={setFiltersVisible}>
            <Filters />
          </Drawer>
        ) : (
          <Filters />
        )}
      </div>
      <div className="dashboard__sort">
        {isMobile ? (
          <Drawer icon={sortIcon} visible={sortingVisible} setVisible={setSortingVisible}>
            <Sorting setVisible={setSortingVisible} />
          </Drawer>
        ) : (
          <Sorting />
        )}
      </div>
      <div className="dashboard__data">
        <Tickets setPageSize={setPageSize} />
      </div>
    </div>
  )
}

export default Dashboard
