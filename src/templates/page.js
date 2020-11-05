import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Page({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div
        style={{
          minHeight: "calc(100vh - 100px)",
        }}
      >
        <div className="container page-content">
          <h1>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
