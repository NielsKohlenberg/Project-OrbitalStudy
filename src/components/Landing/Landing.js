import React from "react"

import LandingBackground from "./../Images/Landing/LandingBackground.jpg"
import GetStarted from "./../Buttons/GetStarted/GetStarted.js"

import "./Landing.css"

const Landing = () => (
  <div className="Landing" style={{backgroundImage: "url("+ LandingBackground +")"}}>
    <div className="ContainerMain">
      <h2 className="Title">
        Find your University here
      </h2>
      <p className="Content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum, enim mattis hendrerit pharetra, nisl turpis tristique ex, iaculis fermentum neque est sed augue. Sed empus lorem non odio ultricies consequat.
      </p>
      <GetStarted Text="Get Started" />
    </div>
  </div>
)

export default Landing
