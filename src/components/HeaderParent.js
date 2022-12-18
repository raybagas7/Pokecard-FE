import React from 'react';
import LogoSite from './LogoSite';
import ProfileImageIcon from './ProfileImageIcon';
import '../styles/header-style.css';
const HeaderParent = ({ logout, userData }) => {
  return (
    <div className="agaz-header">
      <LogoSite />
      <ProfileImageIcon logout={logout} userData={userData} />
    </div>
  );
};

export default HeaderParent;
