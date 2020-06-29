import React from "react"

import "./NavItem.css"

const NavItem = (props) => (
  <div className="NavItem">
    <button type="button">{props.Text}</button>
  </div>
)

export default NavItem
