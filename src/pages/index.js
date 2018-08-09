import React from 'react'
import graphql from 'graphql'
import { getUserLangKey } from 'ptz-i18n'
import { withPrefix } from 'gatsby-link'

export default class RedirectIndex extends React.PureComponent {
  constructor(props) {
    super(props)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { languages, defaultLanguage } = props.data.site.siteMetadata
      const langKey = getUserLangKey(
        languages.map(language => language.code),
        defaultLanguage
      )
      const homeUrl = withPrefix(`/${langKey}`)
      window.___history.replace(homeUrl)
    }
  }

  render() {
    return null
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultLanguage
        languages {
          code
        }
      }
    }
  }
`
