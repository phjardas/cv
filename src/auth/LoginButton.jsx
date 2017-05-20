import React from 'react';

export default ({ logo, label, onClick }) => <div className="login-button" onClick={onClick}>
  <div className="login-button-icon">
    <div className="login-button-icon-wrapper">
      <img src={logo} className="login-button-icon-img" />
    </div>
  </div>
  <span>{label}</span>
</div>;
