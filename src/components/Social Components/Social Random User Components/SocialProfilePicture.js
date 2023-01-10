import React from 'react';
const SocialProfilePicture = ({ trainerName }) => {
  return (
    <div
      className={`ml-3 mr-2 flex max-h-20 w-fit cursor-pointer items-center rounded-2xl bg-white shadow-md
        transition-all group-hover:absolute group-hover:animate-expand_user_profile`}
    >
      <img
        className="max-h-20 w-auto p-2"
        src={`./images/pokemon_elements/normal.png`}
        alt={trainerName}
      />
      <div className=" hidden flex-1 justify-center group-hover:flex group-hover:animate-fade_out">
        <p className=" text-2xl hover:text-gray-500">VISIT</p>
      </div>
    </div>
  );
};

export default SocialProfilePicture;
