import React from 'react';
import '../../styles/profile-style.css';
import ProfileTopShowcases from './ProfileTopShowcases';
import ProfileUserData from './ProfileUserData';
import PropTypes from 'prop-types';
import ProfileTopDetailShowcase from './ProfileTopDetailShowcase';
import ProfileBottomDetailShowcase from './ProfileBottomDetailShowcase';

const ProfileContainer = ({ userData, userShowcases, userCredit }) => {
  const { showcases } = userShowcases;
  const [pokemonData, setPokemonData] = React.useState(showcases[0]);
  const topShowcases = showcases.slice(0, 3);
  const botShowcases = showcases.slice(3, 6);

  const changePokemonDetails = (showCaseNumber) => {
    setPokemonData(showcases[showCaseNumber]);
  };

  return (
    <div
      className={`profile-container flex min-h-screen flex-1 text-white 
    max-lg:flex-col`}
    >
      <div
        className={`relative m-10 mr-2 min-h-screen flex-1 flex-col items-center justify-center gap-1
      max-lg:m-5`}
      >
        <div className="border-1 border-1 absolute h-full w-full rounded-lg border-y-2 border-white bg-white/30 drop-shadow-lg backdrop-blur-md">
          <div
            className={`absolute flex h-full w-full flex-col gap-1 p-5
          max-lg:items-center max-lg:justify-center`}
          >
            <div
              className={`flex items-center justify-center rounded-lg bg-black-steam/90 drop-shadow-md
            max-lg:w-fit
            max-md:w-8/10`}
            >
              <ProfileUserData userData={userData} userCredit={userCredit} />
            </div>
            <div
              className="flex-1 rounded-lg bg-black-steam/90 drop-shadow-md
            max-lg:h-96 max-lg:w-9/10"
            >
              <ProfileTopShowcases
                showcases={topShowcases}
                changePokemonDetails={changePokemonDetails}
              />
            </div>
            <div
              className="flex-1 rounded-lg bg-black-steam/90 drop-shadow-md
            max-lg:h-auto max-lg:w-9/10"
            >
              <ProfileTopShowcases
                showcases={botShowcases}
                changePokemonDetails={changePokemonDetails}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative m-10  ml-2 min-h-screen flex-2 flex-col items-center justify-center gap-1 
      max-lg:m-5`}
      >
        <div className="border-1 border-1 absolute h-full w-full rounded-lg border-y-2 border-white bg-white/30 drop-shadow-lg backdrop-blur-md"></div>
        <div className="absolute flex h-full w-full flex-col gap-4 p-5">
          <div className="flex-1 rounded-lg bg-black-steam/90 drop-shadow-md">
            <ProfileTopDetailShowcase pokemonData={pokemonData} />
          </div>
          <div className="flex-1 rounded-lg bg-black-steam/90 drop-shadow-md">
            <ProfileBottomDetailShowcase />
          </div>
        </div>
        {/* <div className="absolute flex h-full w-full flex-col gap-1 rounded-lg p-5">
          <div className="flex-1 rounded-lg "></div>
          <div className="flex-1 rounded-lg "></div>
        </div> */}
      </div>
    </div>
  );
};

ProfileContainer.propTypes = {
  userData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};

export default ProfileContainer;
