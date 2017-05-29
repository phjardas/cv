import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classes from 'classnames';

import { actions as i18nActions } from '.';
import { languages } from '.';

@connect(
  ({ i18n }) => ({ i18n }),
  dispatch => bindActionCreators(i18nActions, dispatch)
)
export default class Main extends Component {
  render() {
    const { i18n, setLanguage } = this.props;
    const { language } = i18n;
    const other = languages.filter(lang => lang.language !== language)[0];

    return <a className="language-switcher" onClick={setLanguage.bind(null, other.language)}>
      {other.label}
    </a>;
  }
}
