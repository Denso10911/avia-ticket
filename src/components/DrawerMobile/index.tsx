import React, { Dispatch, SetStateAction, useRef } from "react"
import cn from "classnames"

import useMatchMedia from "../../hooks/useMatchMedia"
import useOnClickOutside from "../../hooks/useOnClickOutside"

import close from "../../assets/images/close.svg"

import "./drawer-mobile.scss"

interface Props {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
  icon?: string
}

const DrawerMobile: React.FC<Props> = ({ visible, setVisible, icon, children }) => {
  const drawerRef = useRef(null)

  const [isMobile] = useMatchMedia(540)

  const handleCloseDrawer = (event: Event) => {
    setVisible(false)
  }
  useOnClickOutside(drawerRef, handleCloseDrawer)

  if (!isMobile) {
    return <>{children}</>
  }

  return (
    <div className={cn("drawer-mobile", visible && "drawer-mobile--visible")}>
      <div className="drawer-mobile__icon" onClick={() => setVisible(true)}>
        <img src={icon} alt="filter icon" />
      </div>
      <div
        className={cn("drawer-mobile__body", visible && "drawer-mobile__body--visible")}
        ref={drawerRef}
      >
        <div className="drawer-mobile__close" onClick={() => setVisible(false)}>
          <img src={close} alt="close icon" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default DrawerMobile
