import React from "react"

import Phone from './Phone.js'

import "./FeaturesDesktop.css"

const FeaturesDesktop = () => (
  <div className="FeaturesDesktop ContainerMain">
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
)


export default FeaturesDesktop
