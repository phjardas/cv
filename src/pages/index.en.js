import React from 'react'
import CV from '../components/cv'

export default ({ data, locale }) => <CV data={data} locale={locale} />

export const query = graphql`
  query CVDataEn {
    general: allContentfulGeneralData {
      edges {
        node {
          id
          node_locale
          contactMe
          employmentHistory
        }
      }
    }

    profile: allContentfulProfile {
      edges {
        node {
          id
          node_locale
          profile {
            internal {
              content
            }
          }
        }
      }
    }

    workExperience: allContentfulWorkExperience(
      sort: { fields: [from], order: DESC }
    ) {
      edges {
        node {
          id
          node_locale
          from
          until
          company
          position
          location
          description {
            internal {
              content
            }
          }
          technologies {
            internal {
              content
            }
          }
        }
      }
    }
  }
`
