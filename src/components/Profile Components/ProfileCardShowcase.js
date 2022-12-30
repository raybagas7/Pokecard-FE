import React from 'react';

const ProfileCardShowcase = () => {
  const type = 'legendary-shine';
  return (
    <div
      className={`relative m-1 flex h-56 w-36 cursor-pointer flex-col rounded-xl bg-black hover:animate-lift_card`}
    >
      <div
        className={`relative flex w-full flex-col bg-cover ${
          type === undefined ? 'h-full rounded-xl' : 'h-3/4 rounded-t-xl'
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
          className={`rounded-t-xl pt-1 pb-1 indent-2 text-xxs
           before:content-['#']
            ${
              type === 'normal'
                ? 'bg-yellow-300'
                : type === 'shiny'
                ? 'profile-attr-shiny bg-orange-400'
                : type === 'legendary'
                ? 'profile-attr-legendary bg-purple-600 '
                : type === 'legendary-shine'
                ? 'profile-attr-legendary-shine bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
                : ''
            }`}
        >
          aa
        </p>
        <div className="flex flex-1">
          <img
            src="/images/quetion-mark.png"
            alt="pokemon-images"
            className=" m-auto block h-full w-full object-contain"
          ></img>
        </div>
      </div>
      <div
        className={`${
          type === undefined
            ? ''
            : `static bottom-0 h-1/4 w-full cursor-default overflow-hidden text-ellipsis 
          rounded-b-xl bg-black text-white `
        }`}
      >
        <p
          className={`${
            type === undefined
              ? ''
              : `pt-1 pb-1 text-center text-xxs ${
                  type === 'normal'
                    ? 'bg-red-poke'
                    : type === 'shiny'
                    ? 'bg-orange-400'
                    : type === 'legendary'
                    ? 'bg-purple-600'
                    : type === 'legendary-shine'
                    ? 'bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
                    : ''
                }`
          } `}
        >
          {type === undefined ? '' : 'Pikachu'}
        </p>
        {type === undefined ? null : (
          <div className="flex items-center justify-center">
            <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="m-1.5 h-5 w-5"
            />
            <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="m-1.5 h-5 w-5"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCardShowcase;
