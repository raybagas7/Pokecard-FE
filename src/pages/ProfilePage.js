import React from 'react';
import ProfileContainer from '../components/Profile Components/ProfileContainer';
import {
  getCreditAndTotalCardsWithRefresh,
  getUserShowcasesRefresh,
  getUserTradesRefresh,
} from '../utils/network-data';

function ProfilePage() {
  // console.log('profile page', userData);

  const [userShowcases, setUserShowcases] = React.useState();
  const [userTrades, setUserTrades] = React.useState();
  const [userCredit, setUserCredit] = React.useState();
  const [initializing1, setInitializing1] = React.useState(true);
  const [initializing2, setInitializing2] = React.useState(true);
  const [initializing3, setInitializing3] = React.useState(true);

  React.useEffect(() => {
    getUserShowcasesRefresh().then(({ error, data, message }) => {
      try {
        setUserShowcases(data);
        setInitializing1(false);
      } catch (e) {
        // console.log(message);
      }

      getUserTradesRefresh().then(({ error, data, message }) => {
        try {
          setUserTrades(data);
          setInitializing2(false);
        } catch (e) {
          // console.log(message);
        }
      });

      getCreditAndTotalCardsWithRefresh().then(({ error, data, message }) => {
        try {
          setUserCredit(data);
          setInitializing3(false);
        } catch (e) {
          // console.log(e);
        }
      });
    });
  }, []);

  if (initializing1 || initializing2 || initializing3) {
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
      <ProfileContainer
        userShowcases={userShowcases}
        userTrades={userTrades}
        userCredit={userCredit}
      />
    </section>
  );
}

export default ProfilePage;
