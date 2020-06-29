import React from "react"
import StripeCheckout from "react-stripe-checkout"

function handleToken(token, addresses){
  console.log({token, addresses});
}

const Deluxe = () => (
  <div className="Plan Deluxe">
    <h3 className="Title">Deluxe</h3>
    <p className="SubTitle">Everything you need to start your adventure!</p>
    <p className="TopPriceTitle">As low as</p>
    <p className="Costs">
      <span className="Price">&euro;2.99</span><span className="Montly">/mo</span>
    </p>
    <p className="BottomPriceTitle">&euro;3.99/mo when you renew</p>
    <StripeCheckout
      stripeKey="pk_test_51GxXdhAE9HOK6hqjYCNbEd7mheowZLaqmdWXgLSEXXqA6yHeQ6Y4sJ3n8jcaLLnAzOLMMThgFwXelm6Kivp7ix0U00JlyomVOI"
      token={handleToken}
      billingAddress
      amount={0 * 100}
    />
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
