import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';


@connect(({ content }) => ({ content: content.content }))
export default class Content extends Component {
  render() {
    const lang = 'en';
    const { location, content } = this.props;
    const section = location.pathname.substring(1);

    if (!content || !(section in content)) {
      return <Alert bsStyle='info'>Loading…</Alert>;
    }

    const data = content[section][lang];

    return <div>
      <h1>{ data.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }}  />
    </div>;
  }
}
