import React from 'react';
import PokemonOfficialAvatar from './PokemonOfficialAvatar';
import ProfilePokemonMoves from './ProfilePokemonMoves';
import ProfilePokemonStat from './ProfilePokemonStat';

const ProfileTopDetailShowcase = ({ pokemonData }) => {
  // console.log(pokemonData);
  return (
    <div
      key={pokemonData.poke_id ? pokemonData.poke_id : 'undefined'}
      className="flex h-full w-full rounded-lg 
      max-md:flex-col max-md:items-center max-md:justify-center"
    >
      <div
        className="flex flex-2 rounded-l-lg  max-xl:items-center
      max-xl:justify-center max-md:order-1
      max-md:h-full max-md:w-full "
      >
        <div className="flex flex-1 items-center justify-center rounded-tl-lg max-xl:flex-col">
          <ProfilePokemonStat stats={pokemonData.stats} />
          <div className="flex h-full w-full flex-1 flex-col items-center justify-center max-xl:flex-row">
            <ProfilePokemonMoves move={pokemonData.move1} />
            <ProfilePokemonMoves move={pokemonData.move2} />
          </div>
        </div>
      </div>
      {pokemonData.poke_id ? (
        <PokemonOfficialAvatar pokemonData={pokemonData} />
      ) : (
        <div className="flex flex-1 items-center">
          <div
            className={`m-3 flex h-9/10 w-9/10 flex-1 flex-col justify-center rounded-lg border-2 border-gray-500 bg-fb-undefined bg-cover
          max-xl:h-8/10 max-xl:w-8/10 `}
          >
            <div>
              <img
                alt={`${pokemonData.poke_id}`}
                src={`https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/quetion-mark.png`}
                className="h-auto w-full animate-fade_in_slide_left rounded-lg "
              />
            </div>
          </div>
        </div>
      )}
      {/* <PokemonOfficialAvatar pokemonData={pokemonData} /> */}
    </div>
  );
};

export default ProfileTopDetailShowcase;
