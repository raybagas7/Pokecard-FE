import React from 'react';
import LogoSite from './LogoSite';
import ProfileImageIcon from './ProfileImageIcon';
import '../styles/header-style.css';
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

export default HeaderParent;
