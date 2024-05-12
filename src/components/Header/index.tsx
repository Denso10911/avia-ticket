import React from "react"

import logo from "../../assets/images/logo.png"

import "./header.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Logo Air" />
      </Link>
    </div>
  )
}

export default Header
