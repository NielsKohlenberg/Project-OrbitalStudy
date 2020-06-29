import React from "react"
import StripeCheckout from "react-stripe-checkout"

import GetStarted from "./../Buttons/GetStarted/GetStarted.js"


function handleToken(token, addresses){
  console.log({token, addresses});
}

const Basic = () => (

  <div className="Plan Basic">
    <h3 className="Title">Basic</h3>
    <p className="SubTitle">Basic resources to get you started</p>
    <p className="Costs">
      <span className="Price">Free</span><span className="Montly">/mo</span>
    </p>
    <StripeCheckout
      stripeKey="pk_test_51GxXdhAE9HOK6hqjYCNbEd7mheowZLaqmdWXgLSEXXqA6yHeQ6Y4sJ3n8jcaLLnAzOLMMThgFwXelm6Kivp7ix0U00JlyomVOI"
      token={handleToken}
      billingAddress
      amount={0 * 100}
    />
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
