import React from 'react';

const ProfilePokemonMoves = ({ move }) => {
  return (
    <div className="flex h-full w-full flex-1 animate-fade_in_slide_up items-center justify-center">
      <div className="flex h-9/10 w-9/10 flex-col rounded-lg">
        <div
          className={`flex items-center justify-between rounded-t-lg ailment-${
            move !== null ? move.ailment : 'none'
          }`}
        >
          <p
            className={`p-1 pl-3 text-sm before:content-['#'] max-2xl:text-xxs`}
          >
            {move !== null ? move.id : '0'}
          </p>
          <p className="pr-3 text-sm first-letter:capitalize max-2xl:text-xxs">
            {move !== null ? move.ailment : 'none'}
          </p>
        </div>
        <div
          className={`flex flex-1 items-center justify-center ${
            move !== null ? `move-type-${move.type}` : 'bg-gray-500'
          }`}
        >
          <img
            src={
              move !== null
                ? `./images/pokemon_elements/${move.type}.png`
                : ' ./images/quetion-mark.png'
            }
            className={`mr-1 h-14 w-14 animate-fade_in_slide_left 
            max-2xl:h-8 max-2xl:w-8
            ${move !== null ? `rounded-full border-2 border-white` : ''}`}
            alt={`${move !== null ? move.type : ''}`}
          />
          <p
            className={`ml-1 animate-fade_in text-2xl first-letter:capitalize
          max-2xl:text-base`}
          >
            {move !== null ? move.name : ''}
          </p>
        </div>
        <div className="flex items-center rounded-b-lg">
          <div
            className={`flex flex-1 items-center justify-center rounded-bl-lg bg-black-steam p-2 text-sm
          max-2xl:text-xxs`}
          >
            Move Category
          </div>
          <div className="flex h-full flex-1 rounded-br-lg">
            <div className="flex flex-1 items-center justify-center bg-red-poke p-2 text-sm max-2xl:text-xxs">
              {move === null || move.power === null ? '-' : move.power}
            </div>
            <div className="flex flex-1 items-center justify-center bg-amber-400 p-2 text-sm max-2xl:text-xxs">
              {move === null || move.accuracy === null ? '-' : move.accuracy}
            </div>
            <div className="flex flex-1 items-center justify-center rounded-br-lg bg-blue-500 p-2 text-sm max-2xl:text-xxs">
              {move === null || move.pp === null ? '-' : move.pp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePokemonMoves;
