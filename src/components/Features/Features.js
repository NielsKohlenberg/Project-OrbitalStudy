import React from "react"

import Horizon from "./Horizon.js"
import Phone from "./Phone.js"

import "./Horizon.css"
import "./Features.css"

const Features = () => (
  <div className="Features">
    <div className="HorizonSection">
      <Horizon>
        <div className="HorizonContainer">
          <div className="TextWrapperLeft">
            <div className="ItemFeature">
              <h4 className="Title">Fast & Simple Setup</h4>
              <p className="Paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis felis eu eros ultricies fringilla.
              </p>
            </div>
            <div className="ItemFeature">
              <h4 className="Title">Secure</h4>
              <p className="Paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis felis eu eros ultricies fringilla.
              </p>
            </div>
            <div className="ItemFeature">
              <h4 className="Title">Everything in One Place</h4>
              <p className="Paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis felis eu eros ultricies fringilla.
              </p>
            </div>
          </div>
          <Phone />
            <div className="TextWrapperRight">
              <div className="ItemFeature">
                <h4 className="Title">Quick & Effortless</h4>
                <p className="Paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis felis eu eros ultricies fringilla.
                </p>
              </div>
              <div className="ItemFeature">
                <h4 className="Title">Personalized Road Map</h4>
                <p className="Paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis felis eu eros ultricies fringilla.
                </p>
              </div>
              <div className="ItemFeature">
                <h4 className="Title">Mobile App</h4>
                <p className="Paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis felis eu eros ultricies fringilla.
                </p>
              </div>
            </div>
        </div>
      </Horizon>
    </div>
  </div>
)

export default Features
