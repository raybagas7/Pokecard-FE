import React, { useState } from 'react';
import { getUserDetailBySearchIdRefresh } from '../../../utils/network-data';
import SocialUserLeftContainer from './SocialUserLeftContainer';
import SocialUserRightContainer from './SocialUserRightContainer';

const SocialUserContainer = ({ searchId }) => {
  const [userData, setUserData] = useState();
  const [initializing, setInitializing] = useState(true);

  React.useEffect(() => {
    getUserDetailBySearchIdRefresh(searchId).then(
      ({ error, data, message }) => {
        try {
          setUserData(data);
          setInitializing(false);
        } catch (e) {
          console.log(message);
        }
      }
    );
  }, [searchId]);

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

  //   console.log(userData);

  return (
    <div
      className={`profile-container flex flex-1 text-white 
    max-lg:flex-col`}
    >
      <SocialUserLeftContainer
        showcases={userData.showcaseCards}
        totalCards={userData.totalCards}
      />
      <SocialUserRightContainer />
    </div>
  );
};

export default SocialUserContainer;
