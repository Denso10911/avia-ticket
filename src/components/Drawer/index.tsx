import React, { Dispatch, SetStateAction, useRef } from "react"
import cn from "classnames"

import useOnClickOutside from "../../hooks/useOnClickOutside"

import close from "../../assets/images/close.svg"

import "./drawer.scss"

interface Props {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
  icon?: string
}

const Drawer: React.FC<Props> = ({ visible, setVisible, icon, children }) => {
  const drawerRef = useRef(null)

  const handleCloseDrawer = (event: Event) => {
    setVisible(false)
  }
  useOnClickOutside(drawerRef, handleCloseDrawer)

  return (
    <div className={cn("drawer", visible && "drawer--visible")}>
      <div className="drawer__icon" onClick={() => setVisible(true)}>
        <img src={icon} alt="filter icon" />
      </div>
      <div className={cn("drawer__body", visible && "drawer__body--visible")} ref={drawerRef}>
        <div className="drawer__close" onClick={() => setVisible(false)}>
          <img src={close} alt="close icon" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Drawer
