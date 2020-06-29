import React from "react"
import UserInterface from "./../Images/Features/ConceptUserInterfaceMobile.png"

import "./Phone.css"

const Phone = () => (
  <div className="Phone">
    <div className="PhoneDetailsTop">
      <div className="Vent"></div>
    </div>
    <div className="ShowCaseImage" style={{backgroundImage: "url("+ UserInterface +")"}}>

    </div>
    <div className="PhoneDetailsBottom">
      <div className="HomeButton"></div>
    </div>
  </div>
)


export default Phone
