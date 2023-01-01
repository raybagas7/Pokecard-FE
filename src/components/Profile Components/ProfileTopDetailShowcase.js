import React from 'react';
import ProfilePokemonMoves from './ProfilePokemonMoves';
import ProfilePokemonStat from './ProfilePokemonStat';

const ProfileTopDetailShowcase = () => {
  return (
    <div className="flex h-full w-full rounded-lg">
      <div className="flex flex-2 flex-col rounded-l-lg ">
        <div className="flex flex-1 items-center justify-center rounded-tl-lg ">
          <ProfilePokemonStat />
          <div className="flex h-full w-full flex-1 flex-col items-center justify-center ">
            <ProfilePokemonMoves />
            <ProfilePokemonMoves />
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-1 flex-col rounded-lg border-2 border-gray-500 bg-fb-legendary-shine bg-cover  ">
        <div>
          <img
            alt="pikachu"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
            className="h-auto w-full animate-fade_in_slide_left rounded-lg"
          />
        </div>
        <div className="flex h-full w-full flex-1 flex-col rounded-b-lg bg-purple-700">
          <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark">
            <p className="animate-fade_in">POKEMON NAME</p>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-b-lg bg-black-steam">
            <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="ml-1.5 mr-1.5 h-7 w-7 animate-fade_in"
            />
            <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="mr-1.5 ml-1.5 h-7 w-7 animate-fade_in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTopDetailShowcase;
