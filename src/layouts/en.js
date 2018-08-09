import React from 'react'
import Layout from './layout'

export default props => (
  <Layout data={props.data} language="en">
    {props.children({ ...props, locale: 'en-US' })}
  </Layout>
)

export const query = graphql`
  query LayoutEn {
    site {
      siteMetadata {
        languages {
          code
          label
        }
      }
    }

    general: allContentfulGeneralData {
      edges {
        node {
          title
          tagline
        }
      }
    }
  }
`
