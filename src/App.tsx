import React from "react"
import "./assets/styles/global"
import logo from "./assets/images/logo.png"


const App = () => {
  return (
    <div className="container" style={{color: "red"}}>
      <p className="paragraph">Hello</p>
      <img src={logo} alt="logo"/>
    </div>
  )
}

export default App
