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
  return (
    <div className="flex h-24 w-72 items-center rounded-2xl bg-white/70">
      <Link
        className="group flex h-24 w-full items-center"
        to={`/social?search_id=${search_id}`}
      >
        <SocialProfilePicture trainerName={trainer_name} />

        <div className="static mr-2 flex h-20 w-full flex-1 flex-col rounded-2xl bg-white p-1 shadow-md group-hover:invisible">
          <div className="m-1 mb-0 flex justify-between border-b-2 border-black/50 ">
            <div className="w-20 overflow-hidden text-ellipsis whitespace-nowrap">
              <p className="ml-2 text-sm">{trainer_name}</p>
            </div>
            <div className="flex items-center">
              <AiOutlineNumber />
              <p className="mr-2 text-sm">{search_id}</p>
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
