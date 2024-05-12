import React from "react"
import cn from "classnames"

import Spinner from "../Spinner"

import "./button.scss"

interface Props {
  text: string
  onClick: () => void
  type: "button" | "submit"
  loading: boolean
}

const Button: React.FC<Props> = ({ text, onClick, type, loading }) => {
  return (
    <button disabled={loading} className={cn("button")} onClick={onClick} type={type}>
      {loading ? <Spinner size="md" /> : text}
    </button>
  )
}

export default Button
