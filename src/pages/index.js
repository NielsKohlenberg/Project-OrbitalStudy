import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/Landing/Landing.js"
import Plans from "../components/Plans/Plans.js"
import ArticleLeft from "../components/Articles/ArticleLeft.js"
import ArticleRight from "../components/Articles/ArticleRight.js"
import Features from "../components/Features/Features.js"
import FeaturesDesktop from "../components/Features/FeaturesDesktop.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Plans />
    <div className="ContainerMain">
      <hr />
      <ArticleLeft />
      <hr />
    </div>
    <div className="Mobile">
      <Features />
    </div>
    <div className="Desktop">
      <FeaturesDesktop />
    </div>
    <div className="ResetFeatures ContainerMain">
      <hr />
      <ArticleRight />
      <hr />
    </div>
  </Layout>
)

export default IndexPage
