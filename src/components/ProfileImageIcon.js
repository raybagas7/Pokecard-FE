import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import ValidationContext from '../context/ValidationContext';
import TtlVerifContext from '../context/TtlVerifContext';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const ProfileImageIcon = ({ logout, userData, sendVerification }) => {
  const { authedUser } = React.useContext(ValidationContext);
  const { ttlVerification, toggleTtlVerification } =
    React.useContext(TtlVerifContext);

  console.log('ttl ', ttlVerification);

  const send = async () => {
    toggleTtlVerification();
    await sendVerification({ targetEmail: userData.user.email });
  };

  const showAlertForVerification = () => {
    Swal.fire({
      title: 'Send verification link to your email?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        popup: 'verification-swal',
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'You will recieve the email, please check in your inbox or spam!',
          '',
          'success'
        );
        send();
      } else if (result.isDenied) {
        Swal.fire('Verify your account to get more credits', '', 'info');
      }
    });
  };

  const showAlert = () => {
    Swal.fire({
      title: 'Do you want to send another verification link to your email?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        popup: 'verification-swal',
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'You will recieve new email, please check in your inbox or spam!',
          '',
          'success'
        );
        send();
      } else if (result.isDenied) {
        Swal.fire('Please check your inbox or spam email!', '', 'info');
      }
    });
  };

  return (
    <>
      <div className="account-option">
        <div className="icon-dropdown">
          <div className="icon-image">
            <img
              className="aspect-square object-cover"
              src={
                userData.user.profile_img
                  ? userData.user.profile_img
                  : './images/pokemon_elements/normal.png'
              }
              alt="profile pictures"
            />
            <div className="dropdown-content">
              <Link
                to={'/settings'}
                className="upper-dropdown"
                title={`Profile ${authedUser.user.trainer_name}`}
              >
                {userData.user.trainer_name}
              </Link>
              {authedUser.user.is_valid === false &&
              authedUser.user.wait_verify === false &&
              ttlVerification === false ? (
                <p
                  className="middle-dropdown bg-gold-poke"
                  title="Verification Button"
                  onClick={showAlertForVerification}
                >
                  Verify
                </p>
              ) : authedUser.user.is_valid === false &&
                (authedUser.user.wait_verify === true ||
                  ttlVerification === true) ? (
                <p
                  className="middle-dropdown bg-gold-poke"
                  title="Wait user to verify account, please check your email"
                  onClick={showAlert}
                >
                  Waiting
                </p>
              ) : null}
              <Link
                to={'/collections'}
                className="middle-dropdown"
                title="Collections"
              >
                Collections
              </Link>
              <Link to={'/offers'} className="middle-dropdown" title="Offers">
                Offers
              </Link>
              <Link to={'/trades'} className="middle-dropdown" title="Trades">
                Trades
              </Link>
              <Link
                to={'/'}
                className="bottom-dropdown group/logout"
                title="Logout"
                onClick={logout}
              >
                Logout{' '}
                <RiLogoutCircleLine className="circle-logout group-hover/logout:animate-pulse" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProfileImageIcon.propTypes = {
  logout: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  sendVerification: PropTypes.func.isRequired,
};

export default ProfileImageIcon;
