import React from 'react';

const ProfileCardShowcase = () => {
  const type = 'legendary-shine';
  return (
    <div
      className={`relative m-1 flex h-52 w-32 cursor-pointer flex-col rounded-lg bg-black hover:animate-lift_card`}
    >
      <div
        className={`relative w-full bg-cover ${
          type === undefined ? 'h-full rounded-lg' : 'h-3/4 rounded-t-lg'
        } ${
          type === undefined
            ? 'bg-fb-undefined'
            : type === 'normal'
            ? 'bg-fb-normal'
            : type === 'shiny'
            ? 'bg-fb-shiny'
            : type === 'legendary'
            ? 'bg-fb-legendary'
            : type === 'legendary-shine'
            ? 'bg-fb-legendary-shine'
            : ''
        }`}
      >
        <p
          className={`rounded-t-lg pt-2px pb-2px indent-1 text-xxs before:content-['#']
            ${
              type === 'normal'
                ? 'bg-yellow-300'
                : type === 'shiny'
                ? 'bg-orange-400'
                : type === 'legendary'
                ? 'bg-purple-600'
                : type === 'legendary-shine'
                ? 'bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
                : ''
            }`}
        >
          aa
        </p>
        <img
          src="/images/quetion-mark.png"
          alt="pokemon-images"
          className="m-auto block h-4/5 w-4/5 object-contain"
        ></img>
      </div>
      <div
        className={`${
          type === undefined
            ? ''
            : `static bottom-0 h-1/4 w-full cursor-default overflow-hidden text-ellipsis 
          rounded-b-lg bg-black text-white hover:absolute hover:h-full hover:animate-expand_info_showcase`
        }`}
      >
        <p
          className={`pt-1 pb-1 text-center text-xxs ${
            type === 'normal'
              ? 'bg-red-poke'
              : type === 'shiny'
              ? 'bg-orange-400'
              : type === 'legendary'
              ? 'bg-purple-600'
              : type === 'legendary-shine'
              ? 'bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
              : ''
          }`}
        >
          {type === undefined ? '' : 'Pikachu'}
        </p>
      </div>
    </div>
  );
};

export default ProfileCardShowcase;
