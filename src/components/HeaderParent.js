import React from 'react';
import LogoSite from './LogoSite';
import ProfileImageIcon from './ProfileImageIcon';
import '../styles/header-style.css';
import PropTypes from 'prop-types';

const HeaderParent = ({ logout, sendVerification }) => {
  return (
    <div className="agaz-header">
      <LogoSite />
      <ProfileImageIcon logout={logout} sendVerification={sendVerification} />
    </div>
  );
};

HeaderParent.propTypes = {
  logout: PropTypes.func.isRequired,
  sendVerification: PropTypes.func.isRequired,
};

export default HeaderParent;
