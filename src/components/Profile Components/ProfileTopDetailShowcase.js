import React from 'react';
import ProfilePokemonStat from './ProfilePokemonStat';

const ProfileTopDetailShowcase = () => {
  return (
    <div className="flex h-full w-full rounded-lg">
      <div className="flex flex-2 flex-col rounded-l-lg ">
        <div className="flex flex-1 items-center justify-center rounded-tl-lg ">
          <ProfilePokemonStat />
          <div className="flex h-full w-full flex-1 flex-col items-center justify-center ">
            <div className="flex h-full w-full flex-1 items-center justify-center bg-teal-500">
              SKILL
            </div>
            <div className="flex h-full w-full flex-1 items-center justify-center bg-orange-400">
              Story
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col rounded-tr-lg bg-yellow-300">
        <div>
          <img
            alt="pikachu"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
            className="h-auto w-full rounded-tr-lg border-2 border-white"
          />
        </div>
        <div className="flex h-full w-full flex-1 flex-col bg-purple-700">
          <div className="flex flex-1 items-center justify-center bg-green-500">
            POKEMON NAME
          </div>
          <div className="flex flex-1 items-center justify-center rounded-br-lg bg-red-500">
            <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="ml-1.5 mr-1.5 h-7 w-7"
            />
            <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="mr-1.5 ml-1.5 h-7 w-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTopDetailShowcase;
