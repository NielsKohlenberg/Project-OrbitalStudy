import React from "react"
import StripeCheckout from "react-stripe-checkout"

function handleToken(token, addresses){
  console.log({token, addresses});
}

const Premium = () => (
  <div className="Plan Premium">
    <h3 className="Title">Premium</h3>
    <p className="SubTitle">Everything to make the road to the biggest adventure of your life easier!</p>
    <p className="TopPriceTitle">As low as</p>
    <p className="Costs">
      <span className="Price">&euro;3.99</span><span className="Montly">/mo</span>
    </p>
    <p className="BottomPriceTitle">&euro;4.99/mo when you renew</p>
    <StripeCheckout
      stripeKey="pk_test_51GxXdhAE9HOK6hqjYCNbEd7mheowZLaqmdWXgLSEXXqA6yHeQ6Y4sJ3n8jcaLLnAzOLMMThgFwXelm6Kivp7ix0U00JlyomVOI"
      token={handleToken}
      billingAddress
      amount={0 * 100}
    />
    <p className="Details">More Details</p>
    <div className="FeatureList">
      <p className="FeaturesTitle">Features:</p>
      <div className="TextWrap">
        <div className="Left">
          <p className="Feature">- Full access to all articles</p>
          <p className="Feature">- Save & Compare</p>
          <p className="Feature">- Personalized Calendar</p>
          <p className="Feature">- Personalized university search engine</p>
          <p className="Feature">- Personalized program search engine</p>
          <p className="Feature">- Advanced Financial aid calculator</p>
        </div>
        <div className="Right">
          <p className="Feature">- Personalized Road Map</p>
          <p className="Feature">- Access to the latest features</p>
        </div>
      </div>
    </div>
  </div>
)

export default Premium
