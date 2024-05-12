import React from "react"
import cn from "classnames"

import check from "../../assets/images/check.svg"

import "./checkbox.scss"

interface Props {
  checked: boolean
  onChange: () => void
}

const Checkbox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} className="checkbox__input" />
      <div className={cn("checkbox__check", { "checkbox__check--checked": checked })}>
        <img src={check} alt="check" />
      </div>
    </div>
  )
}

export default Checkbox
