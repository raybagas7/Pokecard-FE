import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import ValidationContext from '../context/ValidationContext';
import TtlVerifContext from '../context/TtlVerifContext';
import Swal from 'sweetalert2';

const ProfileImageIcon = ({ logout, userData, sendVerification }) => {
  const { authedUser } = React.useContext(ValidationContext);
  const { ttlVerification, toggleTtlVerification } =
    React.useContext(TtlVerifContext);

  console.log('ttl ', ttlVerification);

  const send = async () => {
    toggleTtlVerification();
    await sendVerification({ targetEmail: userData.user.email });
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
          'You will recieve new email, please check your inbox or spam email!',
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
            <img src="./images/pokemon_elements/normal.png" alt="snoop" />
            <div className="dropdown-content">
              <Link
                to={'/profile'}
                className="upper-dropdown"
                title={`Profile ${authedUser.user.trainer_name}`}
              >
                {userData.user.trainer_name}
              </Link>
              {authedUser.user.is_valid === false &&
              authedUser.user.wait_verify === false ? (
                <p
                  className="middle-dropdown"
                  title="Verification Button"
                  onClick={send}
                >
                  Verify
                </p>
              ) : authedUser.user.is_valid === false &&
                authedUser.user.wait_verify === true ? (
                <p
                  className="middle-dropdown"
                  title="Wait user to verify account, please check your email"
                  onClick={showAlert}
                >
                  Waiting
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
