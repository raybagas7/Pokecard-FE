import React from 'react';

const OffererProfileInfo = ({ trainerName, searchId, profileImg }) => {
  //group-hover/offer:animate-moving_brutally
  return (
    <div className="group/offer absolute bottom-0 mt-3 mb-3 flex h-24 w-52 animate-default_offerer_profile items-center rounded-xl bg-white text-black-steam hover:animate-expand_offerer_profile ">
      <img
        className="absolute m-1.5 max-h-20 w-auto p-1 group-hover/offer:animate-moving_profile_img group-hover/offer:animation-delay-500"
        src={`./images/pokemon_elements/normal.png`}
        alt={trainerName}
      />
      <div
        className="absolute right-0 m-1.5 flex h-20 w-28 flex-col items-center justify-center 
      group-hover/offer:animate-moving_offerer_name group-hover/offer:animation-delay-500"
      >
        <p className="w-24 overflow-hidden text-ellipsis whitespace-nowrap text-center">
          {trainerName}
        </p>
        <p>#{searchId}</p>
      </div>
      <button className="absolute bottom-1/4 left-1/4 hidden h-16 w-32 rounded-xl bg-gold-poke text-xl text-black-steam group-hover/offer:block group-hover/offer:animate-default_quantum">
        Accept
      </button>
    </div>
  );
};

export default OffererProfileInfo;
