import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './layout.scss'

export default ({ children, data, language }) => {
  const { title, tagline } = data.general.edges[0].node

  return (
    <div className="page">
      <Helmet title={`${title} - ${tagline}`} />
      <Header
        title={title}
        tagline={tagline}
        language={language}
        languages={data.site.siteMetadata.languages}
      />
      {children}
    </div>
  )
}
