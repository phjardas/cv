import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../Loading';


@connect(({ content }) => ({ content }))
export default class Content extends Component {
  render() {
    const { content, section, language } = this.props;

    if (!content || !(section in content)) {
      return <div className="main"><Loading /></div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: content[section][language] }} />;
  }
}
