import React from 'react';
import SocialUserData from './SocialUserData';

const SocialUserLeftContainer = ({ showcases, totalCards }) => {
  //   console.log(showcases, totalCards);
  return (
    <div
      className={`relative m-10 mr-2  flex-1 flex-col items-center justify-center gap-1
      max-lg:m-5`}
    >
      <div className="border-1 border-1 h-full w-full rounded-lg border-y-2 border-white bg-white/30 drop-shadow-lg backdrop-blur-md">
        <div
          className={`flex h-full w-full flex-col items-center gap-1
          p-5 max-lg:justify-center`}
        >
          <div
            className={`flex w-fit items-center justify-center rounded-lg bg-black-steam/90
            drop-shadow-md
            max-md:w-8/10`}
          >
            <SocialUserData userInfo={totalCards} />
          </div>
          <div
            className="h-96 w-full flex-1 rounded-lg
           bg-black-steam/90 drop-shadow-md"
          ></div>
          <div
            className="h-auto w-full flex-1 rounded-lg
           bg-black-steam/90 drop-shadow-md"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SocialUserLeftContainer;
