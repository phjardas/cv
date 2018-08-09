import React from 'react'
import Layout from './layout'

export default props => (
  <Layout data={props.data} language="de">
    {props.children({ ...props, locale: 'de-DE' })}
  </Layout>
)

export const query = graphql`
  query LayoutDe {
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
