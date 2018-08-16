import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Icon from './icon'

export default ({ contactMe }) => (
  <footer className="page-footer">
    <div className="contact">
      {contactMe}{' '}
      <a href="mailto:philipp@jardas.de">
        <Icon icon="envelope" /> philipp@jardas.de
      </a>
      <OutboundLink
        href="https://www.xing.com/profile/Philipp_Jardas"
        className="profiles"
      >
        <Icon icon={{ prefix: 'fab', iconName: 'xing' }} /> XING
      </OutboundLink>
      <OutboundLink
        href="http://de.linkedin.com/in/philippjardas"
        className="profiles"
      >
        <Icon icon={{ prefix: 'fab', iconName: 'linkedin' }} /> LinkedIn
      </OutboundLink>
      <OutboundLink href="https://github.com/phjardas" className="profiles">
        <Icon icon={{ prefix: 'fab', iconName: 'github' }} /> GitHub
      </OutboundLink>
      <OutboundLink
        href="http://stackoverflow.com/users/469029/philipp-jardas"
        className="profiles"
      >
        <Icon icon={{ prefix: 'fab', iconName: 'stack-overflow' }} /> Stack
        Overflow
      </OutboundLink>
      <OutboundLink href="http://twitter.com/phjardas" className="profiles">
        <Icon icon={{ prefix: 'fab', iconName: 'twitter' }} /> Twitter
      </OutboundLink>
    </div>
    <div className="ga">This page uses Google Analytics.</div>
  </footer>
)
