import React from 'react'

import Experience from './experience'
import Profile from './profile'
import Footer from './footer'

export default ({ locale, data: { general, profile, workExperience } }) => {
  const localeSelector = selectLocale(locale)
  const { contactMe, employmentHistory } = general.edges
    .filter(localeSelector)
    .map(parseEdge)[0]

  return (
    <div>
      <div className="content">
        <section className="main">
          <h2>{employmentHistory}</h2>
          <Experience
            experience={workExperience.edges
              .filter(localeSelector)
              .map(parseEdge)}
          />
        </section>
        <aside className="aside">
          <Profile
            profile={profile.edges.filter(localeSelector).map(parseEdge)[0]}
          />
        </aside>
      </div>
      <Footer contactMe={contactMe} />
    </div>
  )
}

function selectLocale(locale) {
  return ({ node }) => node.node_locale === locale
}

function parseEdge({ node }) {
  const ret = { ...node }

  Object.keys(ret).forEach(key => {
    const value = ret[key]
    if (typeof value === 'object' && 'internal' in value) {
      ret[key] = value.internal.content
    }
  })

  return ret
}
