import React from "react"

import ArticleImage from "./../Images/Articles/happy-man-behind-laptop.jpg"

import "./Article.css"
import "./ArticleLeft.css"

const ArticleLeft = () => (
  <div className="Article ArticleLeft">
    <div className="ImageWrapper">
      <div className="Image" style={{backgroundImage: "url("+ ArticleImage +")"}}></div>
    </div>
    <div className="TextWrapper">
      <p className="TitleTag">Our Missions & Vision</p>
      <h3 className="Title">We help you realize the biggest adventure of your life</h3>
      <p className="Paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor quam, semper quis tortor vel, semper maximus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ut posuere orci, efficitur condimentum diam.
      </p>
      <div className="Quote">
        <div className="QuoteWrapper">
          <p className="QuoteParagraph">
            "Lorem ipsum dolor sit amet, consectetur adipiscing"
          </p>
        </div>
        <div className="QuoteAuthor">
          <p className="Author">Niels Kohlenberg<br/>
          <span>CEO & Founder</span>
          </p>
          <div className="Image">

          </div>
        </div>
      </div>
    </div>
  </div>
)


export default ArticleLeft
