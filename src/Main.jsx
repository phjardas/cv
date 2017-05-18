import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as authActions } from './auth';
import { actions as i18nActions } from './i18n';

import Content from './content/Content';

import xingIcon from './img/XING.svg';
import githubIcon from './img/GitHub.svg';
import linkedinIcon from './img/LinkedIn.svg';
import stackoverflowIcon from './img/stackoverflow.svg';

@connect(
  ({ auth, i18n }) => ({ auth, i18n }),
  dispatch => bindActionCreators(Object.assign({}, authActions, i18nActions), dispatch)
)
export default class Main extends Component {
  render() {
    const { auth, i18n, logout, setLanguage } = this.props;
    const { language } = i18n;

    /*
      <NavDropdown title='Language' id='menu-language'>
        <MenuItem onClick={setLanguage.bind(null, 'en')} active={language == 'en'}>English</MenuItem>
        <MenuItem onClick={setLanguage.bind(null, 'de')} active={language == 'de'}>Deutsch</MenuItem>
      </NavDropdown>
      <NavDropdown title={<span><Glyphicon glyph='user' /> {auth.user.displayName}</span>} id='menu-user'>
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </NavDropdown>
    */

    return <main>
      <Content section='main' language={language} />

      <footer className="page-footer">
        <div className="footer-address">
          <address>
            <strong>Philipp Jardas</strong><br />
            Schieferbergstr. 33<br />
            63584 Gründau
          </address>
        </div>
        <div className="footer-contact">
          <p>
            <a href="tel:+4917623166442"><i className="material-icons">phone</i> +49 (176) 23166442</a>
            <br />
            <a href="mailto:philipp@jardas.de"><i className="material-icons">email</i> philipp@jardas.de</a>
          </p>
        </div>
        <div className="footer-profiles">
          <p>
            <a href="https://www.xing.com/profile/Philipp_Jardas"><img src={xingIcon} className="icon" /> XING</a>
            <br />
            <a href="http://de.linkedin.com/in/philippjardas"><img src={linkedinIcon} className="icon" /> LinkedIn</a>
            <br />
            <a href="https://github.com/phjardas"><img src={githubIcon} className="icon" /> GitHub</a>
            <br />
            <a href="http://stackoverflow.com/users/469029/philipp-jardas"><img src={stackoverflowIcon} className="icon" /> Stack Overflow</a>
          </p>
        </div>
      </footer>
    </main>;
  }
}
