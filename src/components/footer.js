import React from 'react'

import Icon from './icon'

export default ({ contactMe }) => (
  <footer className="page-footer">
    {contactMe}{' '}
    <a href="mailto:philipp@jardas.de">
      <Icon icon="envelope" /> philipp@jardas.de
    </a>
    <a href="https://www.xing.com/profile/Philipp_Jardas" className="profiles">
      <Icon icon={{ prefix: 'fab', iconName: 'xing' }} /> XING
    </a>
    <a href="http://de.linkedin.com/in/philippjardas" className="profiles">
      <Icon icon={{ prefix: 'fab', iconName: 'linkedin' }} /> LinkedIn
    </a>
    <a href="https://github.com/phjardas" className="profiles">
      <Icon icon={{ prefix: 'fab', iconName: 'github' }} /> GitHub
    </a>
    <a
      href="http://stackoverflow.com/users/469029/philipp-jardas"
      className="profiles"
    >
      <Icon icon={{ prefix: 'fab', iconName: 'stack-overflow' }} /> Stack
      Overflow
    </a>
    <a href="http://twitter.com/phjardas" className="profiles">
      <Icon icon={{ prefix: 'fab', iconName: 'twitter' }} /> Twitter
    </a>
  </footer>
)
