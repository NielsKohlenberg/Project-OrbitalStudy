import React from "react"

import PlanBasic from "./Basic.js"
import PlanDeluxe from "./Deluxe.js"
import PlanPremium from "./Premium.js"

import "./Plans.css"

const Plans = () => (
  <div className="Plans ContainerMain">
    <PlanBasic />
    <PlanDeluxe />
    <PlanPremium />
  </div>
)


export default Plans
