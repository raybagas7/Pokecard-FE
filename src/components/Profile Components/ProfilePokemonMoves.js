import React from 'react';

const ProfilePokemonMoves = () => {
  const ailment = 'unknown';
  const moveType = 'dark';
  return (
    <div className="flex h-full w-full flex-1 animate-fade_in_slide_up items-center justify-center">
      <div className="flex h-9/10 w-9/10 flex-col rounded-lg">
        <div
          className={`flex items-center justify-between rounded-t-lg ailment-${ailment}`}
        >
          <p className={`p-1 pl-3 text-sm before:content-['#']`}>moveid</p>
          <p className="pr-3 text-sm first-letter:capitalize">{ailment}</p>
        </div>
        <div
          className={`flex flex-1 items-center justify-center move-type-${moveType}`}
        >
          <img
            src={`./images/pokemon_elements/${moveType}.png`}
            className={`h-14 w-14 animate-fade_in_slide_left`}
            alt="snoop"
          />
          <p className="ml-1 animate-fade_in text-2xl first-letter:capitalize">
            {moveType}
          </p>
        </div>
        <div className="flex items-center rounded-b-lg">
          <div className="flex flex-1 items-center justify-center rounded-bl-lg bg-green-700 p-2 text-sm ">
            asd
          </div>
          <div className="flex h-full flex-1 rounded-br-lg">
            <div className="flex flex-1 items-center justify-center bg-red-poke p-2 text-sm">
              pw
            </div>
            <div className="flex flex-1 items-center justify-center bg-amber-400 p-2 text-sm">
              acu
            </div>
            <div className="flex flex-1 items-center justify-center rounded-br-lg bg-blue-500 p-2 text-sm">
              pp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePokemonMoves;
