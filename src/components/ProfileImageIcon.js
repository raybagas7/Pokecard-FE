import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';

const ProfileImageIcon = ({ logout, userData }) => {
  return (
    <>
      <div className="account-option">
        <div className="icon-dropdown">
          <div className="icon-image">
            {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/raybagas7"
        ></a> */}
            <img src="./images/pokemon_elements/normal.png" alt="snoop" />
            <div className="dropdown-content">
              <Link
                to={'/profile'}
                className="upper-dropdown"
                title={`Profile ${userData.user.trainer_name}`}
              >
                {userData.user.trainer_name}
              </Link>
              <Link
                to={'/collections'}
                className="middle-dropdown"
                title="Card Collection"
              >
                Card Collections
              </Link>
              <Link to={'/trades'} className="middle-dropdown" title="Trades">
                Trades
              </Link>
              <Link
                to={'/'}
                className="bottom-dropdown"
                title="Logout"
                onClick={logout}
              >
                Logout <RiLogoutCircleLine className="circle-logout" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileImageIcon;
