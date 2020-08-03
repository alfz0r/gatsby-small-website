import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        I always liked programing, even if it's just to learn the simple things.
      </p>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default AboutPage
