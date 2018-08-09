import React from 'react'
import qrcode from './qrcode.svg'

export default ({ title, tagline, languages, language }) => (
  <header className="page-header">
    <h1 className="title">{title}</h1>
    <div className="subtitle">{tagline}</div>
    {languages.filter(lang => lang.code !== language).map(lang => (
      <a key={lang.code} className="language-switcher" href={`/${lang.code}`}>
        {lang.label}
      </a>
    ))}
    <div className="floating-action" onClick={() => window.print()}>
      <i className="material-icons">print</i>
    </div>
    <img className="qr" src={qrcode} />
  </header>
)
