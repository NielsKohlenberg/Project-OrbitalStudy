import React from "react"
import Checkout from "./../Buttons/Checkout/Checkout.js"

const Deluxe = () => (
  <div className="Plan Deluxe">
    <h3 className="Title">Deluxe</h3>
    <p className="SubTitle">Everything you need to start your adventure!</p>
    <p className="TopPriceTitle">As low as</p>
    <p className="Costs">
      <span className="Price">&euro;2.99</span><span className="Montly">/mo</span>
    </p>
    <p className="BottomPriceTitle">&euro;3.99/mo when you renew</p>
    <Checkout Text="Add to Cart" />
    <p className="Details">More Details</p>
    <div className="FeatureList">
      <p className="FeaturesTitle">Features:</p>
      <p className="Feature">- Full access to all articles</p>
      <p className="Feature">- Advanced university search engine</p>
      <p className="Feature">- Advanced program search engine</p>
      <p className="Feature">- Financial aid calculator</p>
      <p className="Feature">- Save & Compare</p>
      <p className="Feature">- Calendar</p>
    </div>
  </div>
)

export default Deluxe
