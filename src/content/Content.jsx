import React, { Component } from 'react';
import { connect } from 'react-redux';


@connect(({ content }) => ({ content }))
export default class Content extends Component {
  render() {
    const { section, lang, content } = this.props;

    if (!(section in content)) {
      return <p>Loading…</p>;
    }

    return <div dangerouslySetInnerHTML={{ __html: content[section][lang] }}  />;
  }
}
