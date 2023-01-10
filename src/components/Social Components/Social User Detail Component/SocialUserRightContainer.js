import React from 'react';

const SocialUserRightContainer = () => {
  return (
    <div
      className={`relative m-10 ml-2 flex-2 flex-col items-center justify-center gap-1 
      max-lg:m-5`}
    >
      <div className="border-1 border-1 flex h-full w-full flex-col gap-4 rounded-lg border-y-2 border-white bg-white/30 p-5 drop-shadow-lg backdrop-blur-md">
        <div className="flex min-h-half-screen items-center justify-center rounded-lg bg-black-steam/90 drop-shadow-md"></div>
        <div className="flex flex-1 rounded-lg bg-black-steam/90 drop-shadow-md"></div>
      </div>
    </div>
  );
};

export default SocialUserRightContainer;
