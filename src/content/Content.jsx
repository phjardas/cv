import React, { Component } from 'react';
import { connect } from 'react-redux';


@connect(({ content }) => ({ content }))
export default class Content extends Component {
  render() {
    const { content, section, language } = this.props;

    if (!content || !(section in content)) {
      return <div className="main"><h2>loading…</h2></div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: content[section][language] }} />;
  }
}
