import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';


@connect(
  ({ content, i18n }) => ({ content: content.content, i18n }),
  () => ({}),
  undefined,
  { withRef: true }
)
export default class Content extends Component {
  render() {
    const { location, content, i18n: { language } } = this.props;
    const section = location.pathname.substring(1);

    if (!content || !(section in content)) {
      return <Alert bsStyle='info'>Loading…</Alert>;
    }

    const data = content[section][language];

    return <div className='transition-item'>
      <h1>{ data.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }}  />
    </div>;
  }
}
