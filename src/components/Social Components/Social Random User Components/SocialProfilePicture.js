import React from 'react';
const SocialProfilePicture = ({ trainerName }) => {
  return (
    <div
      className={`absolute ml-3 mr-2 flex max-h-20 w-fit animate-default_user_profile cursor-pointer items-center rounded-2xl bg-white shadow-md
      group-hover:absolute
      group-hover:animate-expand_user_profile group-hover:animation-delay-100 
      max-lg:max-h-16 max-lg:animate-default_user_profile_lg max-lg:group-hover:animate-expand_user_profile_lg`}
    >
      <img
        className="max-h-20 w-auto p-2
        max-lg:max-h-16"
        src={`./images/pokemon_elements/normal.png`}
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
