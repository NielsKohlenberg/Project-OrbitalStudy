import React from "react"

import NavItem from "../Buttons/NavItem/NavItem.js"

import "./Navigation.css"

const Navigation = () => (
  <div className="Navigation">
    <div className="Item">
      <NavItem Text="Home" Path="/home" />
    </div>
    <div className="Item">
      <NavItem Text="Plans" Path="/plans" />
    </div>
    <div className="Item">
      <NavItem Text="Explore" Path="/explore" />
    </div>
    <div className="Item">
      <NavItem Text="About" Path="/about" />
    </div>
    <div className="Item">
      <NavItem Text="Contact Us" Path="/contact" />
    </div>
  </div>
)


export default Navigation
