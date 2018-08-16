import React from 'react'
import { withPrefix } from 'gatsby-link'
import Icon from './icon'
import QR from './qr'

export default ({ title, tagline, languages, language }) => (
  <header className="page-header">
    <div className="main">
      <h1 className="title">{title}</h1>
      <div className="subtitle">{tagline}</div>
    </div>
    {languages.filter(lang => lang.code !== language).map(lang => (
      <a key={lang.code} className="language-switcher" href={`/${lang.code}`}>
        {lang.label}
      </a>
    ))}
    <a
      className="floating-action"
      href={withPrefix(`Philipp Jardas ${language}.pdf`)}
      target="_blank"
    >
      <Icon icon="print" />
    </a>
    <aside className="aside">
      <QR />
    </aside>
  </header>
)
