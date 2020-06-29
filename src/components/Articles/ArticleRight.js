import React from "react"

import ArticleImage from "./../Images/Articles/amy-with-app.jpg"
import GetStarted from "./../Buttons/GetStarted/GetStarted.js"

import "./Article.css"
import "./ArticleRight.css"

const ArticleRight = () => (
  <div className="Article ArticleRight">
    <div className="ImageWrapper">
      <div className="Image" style={{backgroundImage: "url("+ ArticleImage +")"}}></div>
    </div>
    <div className="TextWrapper">
      <p className="TitleTag">Satisfied Users</p>
      <h3 className="Title">Amy Sawyer</h3>
      <p className="SubTitle">Student at The University of Southern Indiana</p>
      <p className="Paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor quam, semper quis tortor vel, semper maximus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ut posuere orci, efficitur condimentum diam.
      </p>
      <GetStarted Text="Full Story" />
    </div>
  </div>
)


export default ArticleRight
