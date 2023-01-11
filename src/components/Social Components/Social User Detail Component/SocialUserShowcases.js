import React from 'react';
import SocialCardShowcase from './SocialCardShowcase';

const SocialUserShowcases = ({ showcases, changePokemonDetails }) => {
  return (
    <>
      <div className="flex h-1/10 w-full items-center justify-center ">
        <p>SHOWCASE</p>
      </div>
      <div className="flex h-9/10 w-full flex-1 items-center justify-evenly rounded-lg">
        {showcases.map((showcase) => (
          <SocialCardShowcase
            key={`case-${showcase.case_number}`}
            {...showcase}
            changePokemonDetails={changePokemonDetails}
          />
        ))}
      </div>
    </>
  );
};

export default SocialUserShowcases;
