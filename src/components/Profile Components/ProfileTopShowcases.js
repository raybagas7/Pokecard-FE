import React from 'react';
import ProfileCardShowcase from './ProfileCardShowcase';

const ProfileTopShowcases = ({ showcases }) => {
  console.log(showcases);
  return (
    <>
      <div className="flex h-1/10 w-full items-center justify-center ">
        <p>SHOWCASE</p>
      </div>
      <div className="flex h-9/10 w-full flex-1 items-center justify-evenly rounded-lg">
        {showcases.map((showcase) => (
          <ProfileCardShowcase key={showcase.card_id} {...showcase} />
        ))}
      </div>
    </>
  );
};

export default ProfileTopShowcases;
