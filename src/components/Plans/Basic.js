import React from "react"
import GetStarted from "./../Buttons/GetStarted/GetStarted.js"

const Basic = () => (
  <div className="Plan Basic">
    <h3 className="Title">Basic</h3>
    <p className="SubTitle">Basic resources to get you started</p>
    <p className="Costs">
      <span className="Price">Free</span><span className="Montly">/mo</span>
    </p>
    <GetStarted Text="Get Started" />
    <p className="Details">More Details</p>
    <div className="FeatureList">
      <p className="FeaturesTitle">Features:</p>
      <p className="Feature">- 10 articles</p>
      <p className="Feature">- Basic university search engine</p>
      <p className="Feature">- Basic program search engine</p>
    </div>
  </div>
)

export default Basic
