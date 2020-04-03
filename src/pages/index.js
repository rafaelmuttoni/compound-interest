import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Calculator from "../components/Calculator"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Calculator />
  </Layout>
)

export default IndexPage
