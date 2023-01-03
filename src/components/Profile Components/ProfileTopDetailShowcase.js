import React from 'react';
import PokemonOfficialAvatar from './PokemonOfficialAvatar';
import ProfilePokemonMoves from './ProfilePokemonMoves';
import ProfilePokemonStat from './ProfilePokemonStat';

const ProfileTopDetailShowcase = ({ pokemonData }) => {
  return (
    <div
      key={pokemonData.poke_id ? pokemonData.poke_id : 'undefined'}
      className="flex h-full w-full rounded-lg"
    >
      <div className="flex flex-2 flex-col rounded-l-lg ">
        <div className="flex flex-1 items-center justify-center rounded-tl-lg ">
          <ProfilePokemonStat stats={pokemonData.stats} />
          <div className="flex h-full w-full flex-1 flex-col items-center justify-center ">
            <ProfilePokemonMoves move={pokemonData.move1} />
            <ProfilePokemonMoves move={pokemonData.move2} />
          </div>
        </div>
      </div>
      {pokemonData.poke_id ? (
        <PokemonOfficialAvatar pokemonData={pokemonData} />
      ) : (
        <div
          className={`m-3 flex flex-1 flex-col rounded-lg border-2 border-gray-500 bg-fb-undefined bg-cover`}
        >
          <div>
            <img
              alt={`${pokemonData.poke_id}`}
              src={`./images/quetion-mark.png`}
              className="h-auto w-full animate-fade_in_slide_left rounded-lg "
            />
          </div>
          <div className="flex h-full w-full flex-1 flex-col rounded-b-lg"></div>
        </div>
      )}
      {/* <PokemonOfficialAvatar pokemonData={pokemonData} /> */}
    </div>
  );
};

export default ProfileTopDetailShowcase;
