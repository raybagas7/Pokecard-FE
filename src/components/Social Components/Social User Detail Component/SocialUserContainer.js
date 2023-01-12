import React, { useState } from 'react';
import {
  getOwnerCardsRefresh,
  getUserDetailBySearchIdRefresh,
} from '../../../utils/network-data';
import SocialUserLeftContainer from './SocialUserLeftContainer';

const SocialUserContainer = ({ searchId }) => {
  const [userData, setUserData] = useState();
  const [initializing1, setInitializing1] = useState(true);
  const [userDataMessage, setUserDataMessage] = useState();
  const [initializing2, setInitializing2] = useState(true);
  const [ownedCards, setOwnedCards] = useState([]);

  React.useEffect(() => {
    getUserDetailBySearchIdRefresh(searchId).then(
      ({ error, data, message }) => {
        try {
          setUserData(data);
          setUserDataMessage(message);
          setInitializing1(false);
        } catch (e) {
          // setUserDataMessage(message);
          console.log(message);
        }
      }
    );

    getOwnerCardsRefresh().then(({ error, data, message }) => {
      // console.log('home ownedcard', error, data, message);
      try {
        setOwnedCards(data);
        setInitializing2(false);
        // console.log('get ownerdcards', data);
      } catch (e) {
        console.log(e);
      }
    });
  }, [searchId]);

  // React.useEffect(() => {
  //   getOwnerCardsRefresh().then(({ error, data, message }) => {
  //     // console.log('home ownedcard', error, data, message);
  //     try {
  //       setOwnedCards(data);
  //       setInitializing2(false);
  //       // console.log('get ownerdcards', data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  // }, []);

  if (initializing1 || initializing2) {
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

  // console.log(userData);
  // console.log('own', ownedCards);

  return userData ? (
    <div
      className={`profile-container flex flex-1 text-white 
    max-lg:flex-col`}
    >
      <SocialUserLeftContainer
        showcases={userData.showcaseCards}
        totalCards={userData.totalCards}
        tradeCards={userData.tradeCards}
        ownedCards={ownedCards}
      />
    </div>
  ) : (
    <div className="flex h-screen w-full items-center justify-center text-3xl ">
      <div>{userDataMessage}</div>
    </div>
  );
};

export default SocialUserContainer;
