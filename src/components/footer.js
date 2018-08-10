import React from 'react'

import xingIcon from './XING.svg'
import githubIcon from './GitHub.svg'
import linkedinIcon from './LinkedIn.svg'
import stackoverflowIcon from './stackoverflow.svg'

export default ({ contactMe }) => (
  <footer className="page-footer">
    {contactMe}{' '}
    <a href="mailto:philipp@jardas.de">
      <i className="material-icons">email</i> philipp@jardas.de
    </a>
    <a href="https://www.xing.com/profile/Philipp_Jardas" className="profiles">
      <img src={xingIcon} className="icon" /> XING
    </a>
    <br />
    <a href="http://de.linkedin.com/in/philippjardas" className="profiles">
      <img src={linkedinIcon} className="icon" /> LinkedIn
    </a>
    <br />
    <a href="https://github.com/phjardas" className="profiles">
      <img src={githubIcon} className="icon" /> GitHub
    </a>
    <br />
    <a
      href="http://stackoverflow.com/users/469029/philipp-jardas"
      className="profiles"
    >
      <img src={stackoverflowIcon} className="icon" /> Stack Overflow
    </a>
  </footer>
)
