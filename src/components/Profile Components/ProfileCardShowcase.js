import React from 'react';

const ProfileCardShowcase = ({
  poke_id,
  name,
  attribute,
  legendary,
  mythical,
  types,
}) => {
  let type = '';
  (legendary === true || mythical === true) && attribute === 'shiny'
    ? (type = 'legendary-shine')
    : (legendary === true || mythical === true) && attribute !== 'shiny'
    ? (type = 'legendary')
    : ((legendary === false || mythical === false) && attribute) === 'shiny'
    ? (type = 'shiny')
    : (type = 'normal');

  const attributePokemon = () => {
    if (attribute === 'shiny') {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${
        attribute === 'normal' ? '' : '/shiny'
      }/${poke_id}.png`;
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${
      attribute === 'normal' ? '' : '/shiny'
    }/${poke_id}.png`;
  };

  const allElement = types.map((element) => {
    return element.name;
  });

  return (
    <div
      className={`relative m-1 flex h-56 w-36 cursor-pointer flex-col rounded-xl bg-black hover:animate-lift_card`}
    >
      <div
        className={`relative flex w-full flex-col bg-cover ${
          type === undefined || null
            ? 'h-full rounded-xl'
            : 'h-3/4 rounded-t-xl'
        } ${
          type === undefined || null
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
                ? 'bg-yellow-300 text-black'
                : type === 'shiny'
                ? 'profile-attr-shiny bg-orange-400'
                : type === 'legendary'
                ? 'profile-attr-legendary bg-purple-600 '
                : type === 'legendary-shine'
                ? 'profile-attr-legendary-shine bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
                : ''
            }`}
        >
          {poke_id}
        </p>
        <div className="flex flex-1">
          <img
            src={attributePokemon()}
            alt="pokemon-images"
            className=" m-auto block h-9/10 w-9/10 object-contain"
          ></img>
        </div>
      </div>
      <div
        className={`${
          type === undefined || null
            ? ''
            : `static bottom-0 h-1/4 w-full cursor-default overflow-hidden text-ellipsis 
          rounded-b-xl bg-black text-white `
        }`}
      >
        <p
          className={`${
            type === undefined || null
              ? ''
              : `pt-1 pb-1 text-center text-xxs first-letter:capitalize ${
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
          {type === undefined || null ? '' : name}
        </p>
        {type === undefined || null ? null : (
          <div className="flex items-center justify-center">
            {allElement.map((element) => (
              <img
                src={`./images/pokemon_elements/${element}.png`}
                alt="normal"
                className="m-1.5 h-5 w-5"
              />
            ))}
            {/* <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="m-1.5 h-5 w-5"
            />
            <img
              src={`./images/pokemon_elements/normal.png`}
              alt="normal"
              className="m-1.5 h-5 w-5"
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCardShowcase;
