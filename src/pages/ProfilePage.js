import React from 'react';
import PropTypes from 'prop-types';
import ProfileContainer from '../components/Profile Components/ProfileContainer';

function ProfilePage({ userData }) {
  console.log('profile page', userData);
  return (
    <section>
      <ProfileContainer userData={userData} />
    </section>
  );
}

ProfilePage.propTypes = {
  userData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};

export default ProfilePage;
