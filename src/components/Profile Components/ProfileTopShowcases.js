import React from 'react';
import ProfileCardShowcase from './ProfileCardShowcase';

const ProfileTopShowcases = () => {
  return (
    <>
      <div className="flex flex-1 items-center justify-evenly rounded-lg">
        <ProfileCardShowcase />
        <ProfileCardShowcase />
        <ProfileCardShowcase />
      </div>
    </>
  );
};

export default ProfileTopShowcases;
