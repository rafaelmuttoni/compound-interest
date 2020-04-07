import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Calculator from "../components/Calculator"
import ThemeCTA from "../components/ThemeCTA"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <ThemeCTA />
    <Calculator />
  </Layout>
)

export default IndexPage
