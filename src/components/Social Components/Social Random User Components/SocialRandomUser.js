import React from 'react';
import { AiOutlineNumber } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SocialProfilePicture from './SocialProfilePicture';
import SocialCardsOwned from './SocialCardsOwned';

const SocialRandomUser = ({
  search_id,
  trainer_name,
  profile_img,
  normal,
  shiny,
  legendarymyth,
  lmshine,
}) => {
  const splitTrainerName = trainer_name.split(' ');

  return (
    <div
      className="flex h-24 w-80 items-center rounded-2xl bg-white/70
    max-lg:h-20 max-lg:w-72"
    >
      <Link
        className="group relative flex h-24 w-full items-center "
        to={`/social?search_id=${search_id}`}
      >
        <SocialProfilePicture trainerName={splitTrainerName[0]} />

        <div
          className="absolute right-0 mr-2 flex h-20 w-52 flex-1 animate-default_quantum flex-col rounded-2xl bg-white p-1 shadow-md 
          group-hover:animate-fade_out_quantum 
          max-lg:h-16 max-lg:w-48 max-lg:p-0"
        >
          <div className="m-1 mb-0 flex justify-between border-b-2 border-black/50 ">
            <div className="w-20 overflow-hidden text-ellipsis whitespace-nowrap">
              <p className="ml-2 text-sm max-lg:text-xs">
                {splitTrainerName[0]}
              </p>
            </div>
            <div className="flex items-center">
              <AiOutlineNumber />
              <p className="mr-2 text-sm max-lg:text-xs">{search_id}</p>
            </div>
          </div>
          <SocialCardsOwned
            normal={normal}
            shiny={shiny}
            legendarymyth={legendarymyth}
            lmshine={lmshine}
          />
        </div>
      </Link>
    </div>
  );
};

export default SocialRandomUser;
