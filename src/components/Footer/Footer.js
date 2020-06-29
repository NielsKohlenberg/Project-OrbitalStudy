import React from "react"

import GetStarted from "./../Buttons/GetStarted/GetStarted.js"

import "./Footer.css"

const Footer = () => (
  <div className="Footer">
    <div className="ContainerMain FooterWrapper">
      <div className="Company">
        <h2>Orbital Study</h2>
        <p>Start your Adventure</p>
      </div>
      <div className="Service">
        <h3>Service:</h3>
        <p>- My Orbital Study account</p>
        <p>- Customer Service</p>
        <p>- Privacy</p>
        <p>- Login</p>
      </div>
      <div className="Business">
        <h3>Business:</h3>
        <p>- Business customers</p>
        <p>- Affiliate program</p>
        <p>- Work at Orbital Study</p>
        <p>- Development jobs</p>
      </div>
      <div className="News">
        <h4>Stay up to date on the latest news</h4>
        <input type="" name="" value="" placeholder="email"/>
        <GetStarted Text="Subscribe Now" />
      </div>
    </div>
  </div>
)


export default Footer
