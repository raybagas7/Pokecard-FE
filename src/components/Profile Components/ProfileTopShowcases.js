import React from 'react';
import ProfileCardShowcase from './ProfileCardShowcase';
import { nanoid } from 'nanoid';

const ProfileTopShowcases = ({ showcases, changePokemonDetails }) => {
  return (
    <>
      <div className="flex h-1/10 w-full items-center justify-center ">
        <p>SHOWCASE</p>
      </div>
      <div className="flex h-9/10 w-full flex-1 items-center justify-evenly rounded-lg">
        {showcases.map((showcase) => (
          <ProfileCardShowcase
            key={showcase.card_id ? showcase.card_id : nanoid(6)}
            {...showcase}
            changePokemonDetails={changePokemonDetails}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileTopShowcases;
