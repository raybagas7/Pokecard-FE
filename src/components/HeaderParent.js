import React from 'react';
import LogoSite from './LogoSite';
import ProfileImageIcon from './ProfileImageIcon';
import '../styles/header-style.css';
import PropTypes from 'prop-types';

const HeaderParent = ({ logout, userData, sendVerification }) => {
  return (
    <div className="agaz-header">
      <LogoSite />
      <ProfileImageIcon
        logout={logout}
        userData={userData}
        sendVerification={sendVerification}
      />
    </div>
  );
};

HeaderParent.propTypes = {
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  sendVerification: PropTypes.func.isRequired,
};

export default HeaderParent;
