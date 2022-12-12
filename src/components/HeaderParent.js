import React from 'react';
import LogoSite from './LogoSite';
import ProfileImageIcon from './ProfileImageIcon';
import { RiLogoutCircleLine } from 'react-icons/ri';
import '../styles/header-style.css';
const HeaderParent = ({ logout }) => {
  return (
    <div className="agaz-header">
      <LogoSite />
      <RiLogoutCircleLine
        className="logout-button"
        title="Logout"
        onClick={logout}
      />
      <ProfileImageIcon />
    </div>
  );
};

export default HeaderParent;
