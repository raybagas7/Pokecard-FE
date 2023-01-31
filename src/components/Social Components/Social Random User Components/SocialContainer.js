import React, { useState } from 'react';
import { getRandomUsersRefresh } from '../../../utils/network-data';
import SocialFindById from './SocialFindById';

import SocialRandomUser from './SocialRandomUser';

const SocialContainer = ({ selfSearchId }) => {
  const [randUser, setRandUser] = useState();
  const [initializing, setInitializing] = React.useState(true);
  React.useEffect(() => {
    getRandomUsersRefresh().then(({ error, data, message }) => {
      try {
        setRandUser(data);
        setInitializing(false);
      } catch (e) {
        // console.log(message);
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

  if (randUser === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-5xl max-md:text-3xl">
        <div className="text-center">
          You are the only player who play this game
        </div>
      </div>
    );
  }

  const { pool } = randUser;
  // console.log('pool', pool);
  return (
    <>
      <div className="flex h-fit w-full items-center p-5">
        <div
          className="flex h-fit w-full flex-wrap justify-center gap-2 rounded-2xl bg-gold-poke p-3 pt-3 drop-shadow-lg
        max-md:p-2"
        >
          <div
            className="mb-1 w-fit rounded-2xl bg-white/50 p-2 text-2xl text-black-steam drop-shadow-lg
        max-sm:text-xl"
          >
            <p>PokéCard User</p>
          </div>
          <SocialFindById selfSearchId={selfSearchId} />
          {pool
            ? pool.map((user) => (
                <SocialRandomUser key={user.search_id} {...user} />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default SocialContainer;
