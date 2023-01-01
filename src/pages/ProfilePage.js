import React from 'react';
import PropTypes from 'prop-types';
import ProfileContainer from '../components/Profile Components/ProfileContainer';
import { getUserShowcasesRefresh } from '../utils/network-data';

function ProfilePage({ userData }) {
  console.log('profile page', userData);

  const [userShowcases, setUserShowcases] = React.useState();
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    getUserShowcasesRefresh().then(({ error, data, message }) => {
      try {
        setUserShowcases(data);
        setInitializing(false);
      } catch (e) {
        console.log(message);
      }
    });
  }, []);

  if (initializing) {
    return (
      <section className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <span className="absolute top-0 right-0 -mt-16 -mr-14 flex h-32 w-32">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex h-32 w-32 rounded-full bg-yellow-500"></span>
            </span>
          </span>
        </div>
      </section>
    );
  }

  return (
    <section>
      <ProfileContainer userData={userData} userShowcases={userShowcases} />
    </section>
  );
}

ProfilePage.propTypes = {
  userData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};

export default ProfilePage;
