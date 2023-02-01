import React from 'react';

const ProfilePokemonMoves = ({ move }) => {
  return (
    <div
      className="flex h-full w-full flex-1 animate-fade_in_slide_up items-center justify-center max-md:m-5
    max-md:animate-none"
    >
      <div className="flex h-9/10 w-9/10 flex-col rounded-lg">
        <div
          className={`flex items-center justify-between rounded-t-lg max-2xl:text-xxs 
          ailment-${move !== null ? move.ailment : 'none'}`}
        >
          <p
            className={`p-1 pl-3 text-sm before:content-['#'] max-2xl:text-xxs max-md:p-0 max-md:pl-3 max-md:text-xxxs`}
          >
            {move !== null ? move.id : '0'}
          </p>
          <p className="pr-3 text-sm first-letter:capitalize max-2xl:text-xxs max-md:text-xxxs">
            {move !== null
              ? move.ailment === null
                ? 'null'
                : move.ailment
              : 'none'}
          </p>
        </div>
        <div
          className={`flex flex-1 items-center justify-center 
          max-xl:flex-grow-0 max-xl:p-3
          max-lg:p-3
          max-md:p-3
          ${move !== null ? `move-type-${move.type}` : 'bg-gray-500'}`}
        >
          <img
            src={
              move !== null
                ? `https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/pokemon_elements/${move.type}.png`
                : 'https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/quetion-mark.png'
            }
            className={`mr-1 h-14 w-14 animate-fade_in_slide_left 
            max-2xl:h-8 max-2xl:w-8
            max-xl:h-6 max-xl:w-6
            max-md:animate-none
            ${move !== null ? `rounded-full border-2 border-white` : ''}`}
            alt={`${move !== null ? move.type : ''}`}
          />
          <p
            className={`ml-1 animate-fade_in text-2xl first-letter:capitalize
          max-2xl:text-base
          max-xl:text-sm
          max-md:animate-none max-md:text-xs`}
          >
            {move !== null ? move.name : ''}
          </p>
        </div>
        <div className="flex items-center rounded-b-lg">
          <div
            className={`flex flex-1 items-center justify-center rounded-bl-lg bg-black-steam p-2 text-sm
          max-2xl:overflow-hidden max-2xl:text-ellipsis max-2xl:whitespace-nowrap max-2xl:text-xxs
          max-xl:overflow-hidden max-xl:text-ellipsis max-xl:whitespace-nowrap max-xl:p-0`}
          >
            <p className="first-letter:capitalize max-md:text-xxxs">
              {move !== null ? move.category : '-'}
            </p>
          </div>
          <div className="flex h-full flex-1 rounded-br-lg">
            <div className="flex flex-1 items-center justify-center bg-red-poke p-2 text-sm max-2xl:text-xxs max-xl:p-0 max-md:text-xxxs">
              {move === null || move.power === null ? '-' : move.power}
            </div>
            <div className="flex flex-1 items-center justify-center bg-amber-400 p-2 text-sm max-2xl:text-xxs max-xl:p-0 max-md:text-xxxs">
              {move === null || move.accuracy === null ? '-' : move.accuracy}
            </div>
            <div className="flex flex-1 items-center justify-center rounded-br-lg bg-blue-500 p-2 text-sm max-2xl:text-xxs max-xl:p-0 max-md:text-xxxs">
              {move === null || move.pp === null ? '-' : move.pp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePokemonMoves;
