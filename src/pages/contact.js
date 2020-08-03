import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Contact me @
        <a href="https://github.com/alfz0r" target="_blank" rel="noreferrer">
          github
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
