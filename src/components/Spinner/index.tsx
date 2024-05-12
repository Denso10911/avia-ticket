import React from "react"

import spinner from "../../assets/images/spinner.svg"
import cn from "classnames"

import "./spinner.scss"

interface Props {
  size: "sm" | "md"
}

const Spinner: React.FC<Props> = ({ size }) => {
  return (
    <div
      className={cn("spinner", [{ "spinner--sm": size === "sm", "spinner--md": size === "md" }])}
    >
      <img src={spinner} alt="spiner icon" />
    </div>
  )
}

export default Spinner
