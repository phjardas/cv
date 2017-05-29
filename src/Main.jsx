import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as authActions } from './auth';

import Content from './content/Content';

import xingIcon from './img/XING.svg';
import githubIcon from './img/GitHub.svg';
import linkedinIcon from './img/LinkedIn.svg';
import stackoverflowIcon from './img/stackoverflow.svg';

@connect(
  ({ auth, i18n }) => ({ auth, i18n }),
  dispatch => bindActionCreators(authActions, dispatch)
)
export default class Main extends Component {
  render() {
    const { auth, i18n: { language }, logout } = this.props;

    return <main>
      {false && <button onClick={logout}>sign out</button>}

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
