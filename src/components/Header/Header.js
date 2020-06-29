import React from "react"
import { Link } from "gatsby"

import Logo from "./../Images/Brand/logo_transparent_background.png"
import Navigation from "./../Navigation/Navigation.js"
import MenuIcon from "./../Icons/MenuIcon.js"
import Login from "./../Buttons/Login/Login.js"
import Signup from "./../Buttons/Signup/Signup.js"

import "./Header.css"

const Header = () => (
  <header className="Header">
    <div className="ContainerMain HeaderContainer">
      <Link to="/">
        <div className="BrandWrap">
          <div className="Logo" style={{backgroundImage: "url("+ Logo +")"}} />
        </div>
      </Link>
      <nav className="NavigationWrap">
        <Navigation />
      </nav>
      <div className="LoginWrap">
        <div className="Menu">
          <MenuIcon />
        </div>
        <div className="Login">
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  </header>
)

export default Header
