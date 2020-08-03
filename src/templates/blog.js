import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  let postTitle = null
  let postDate = null
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  if (props.data.markdownRemark === null) {
    postTitle = props.data.contentfulBlogPost.title
    postDate = props.data.contentfulBlogPost.publishedDate
  } else {
    postTitle = props.data.markdownRemark.frontmatter.title
    postDate = props.data.markdownRemark.frontmatter.date
  }

  return (
    <Layout>
      <Head title={postTitle} />
      <h1>{postTitle}</h1>
      <p>{postDate}</p>
      {props.data.markdownRemark !== null ? (
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      ) : null}
      {props.data.markdownRemark === null
        ? documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )
        : null}
    </Layout>
  )
}

export default Blog
