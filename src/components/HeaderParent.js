import React from 'react';
import LogoSite from './LogoSite';
import ProfileImageIcon from './ProfileImageIcon';
import '../styles/header-style.css';
const HeaderParent = ({ logout }) => {
  return (
    <div className="agaz-header">
      <LogoSite />
      <ProfileImageIcon logout={logout} />
    </div>
  );
};

export default HeaderParent;
