import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import ValidationContext from '../context/ValidationContext';
import TtlVerifContext from '../context/TtlVerifContext';

const ProfileImageIcon = ({ logout, userData, sendVerification }) => {
  const { authedUser } = React.useContext(ValidationContext);
  const { ttlVerification, toggleTtlVerification } =
    React.useContext(TtlVerifContext);
  console.log('ttl ', ttlVerification);
  const send = async () => {
    toggleTtlVerification();
    await sendVerification({ targetEmail: userData.user.email });
  };
  return (
    <>
      <div className="account-option">
        <div className="icon-dropdown">
          <div className="icon-image">
            <img src="./images/pokemon_elements/normal.png" alt="snoop" />
            <div className="dropdown-content">
              <Link
                to={'/profile'}
                className="upper-dropdown"
                title={`Profile ${authedUser.user.trainer_name}`}
              >
                {userData.user.trainer_name}
              </Link>
              {/* {ttlVerification === true ? null : (
                <p
                  className="middle-dropdown"
                  title="Verification Button"
                  onClick={send}
                >
                  Verify
                </p>
              )} */}
              {ttlVerification === false ? (
                <p
                  className="middle-dropdown"
                  title="Verification Button"
                  onClick={send}
                >
                  Verify
                </p>
              ) : null}
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
