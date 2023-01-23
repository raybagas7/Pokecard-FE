import React from 'react';
const SocialProfilePicture = ({ trainerName, profileImg }) => {
  return (
    <div
      className={`absolute ml-3 mr-2 flex h-20 w-fit animate-default_user_profile cursor-pointer items-center rounded-2xl bg-white shadow-md
      group-hover:absolute
      group-hover:animate-expand_user_profile group-hover:animation-delay-100 
      max-lg:h-16 max-lg:animate-default_user_profile_lg max-lg:group-hover:animate-expand_user_profile_lg`}
    >
      <img
        className="aspect-square max-h-20 w-20 rounded-full object-cover p-2
        max-lg:h-16 max-lg:w-16"
        src={profileImg ? profileImg : './images/pokemon_elements/normal.png'}
        alt={trainerName}
      />
      <div className=" relative flex flex-1 items-center justify-center opacity-0 group-hover:animate-fade_in_visit group-hover:animation-delay-100">
        <div className="absolute flex flex-col items-center text-base hover:text-gray-500">
          <p>VISIT</p>
          <p>{trainerName}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProfilePicture;
