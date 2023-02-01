import React from 'react';

const SocialCardShowcase = ({
  poke_id,
  name,
  attribute,
  legendary,
  mythical,
  types,
  case_number,
  changePokemonDetails,
}) => {
  const chageDetailShowcase = () => {
    changePokemonDetails(case_number - 1);
  };

  let type = '';
  (legendary === true || mythical === true) && attribute === 'shiny'
    ? (type = 'legendary-shine')
    : (legendary === true || mythical === true) && attribute !== 'shiny'
    ? (type = 'legendary')
    : ((legendary === false || mythical === false) && attribute) === 'shiny'
    ? (type = 'shiny')
    : (legendary === false || mythical === false) && attribute === 'normal'
    ? (type = 'normal')
    : (type = undefined);

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

  let allElement = [];
  if (types) {
    allElement = types.map((element) => {
      return element.name;
    });
  }

  if (type === null || undefined || attribute === null || undefined) {
    return (
      <div
        className={`relative m-1 flex h-52 w-36 animate-default_lift_card cursor-pointer flex-col rounded-xl hover:animate-lift_card
        max-2xl:h-44 max-2xl:w-28
        max-xl:h-36 max-xl:w-20
        max-lg:h-52 max-lg:w-36
        max-md:h-36 max-md:w-24 max-md:animate-none max-md:hover:animate-none`}
      >
        <div
          className={`relative flex h-full w-full flex-col rounded-xl bg-fb-undefined bg-cover`}
        >
          <div className="flex flex-1">
            <img
              src={`https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/quetion-mark.png`}
              alt="pokemon-images"
              className="m-auto block h-full w-full object-contain"
            ></img>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={chageDetailShowcase}
      className={`relative m-1 flex h-52 w-36 animate-default_lift_card cursor-pointer flex-col rounded-xl bg-black hover:animate-lift_card hover:drop-shadow-md 
      max-2xl:h-44 max-2xl:w-28
      max-xl:h-32 max-xl:w-20
      max-lg:h-52 max-lg:w-36
      max-md:h-36 max-md:w-24 max-md:animate-none max-md:hover:animate-none`}
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
          max-xl:text-xxxs
          max-lg:text-xs
          max-md:pt-0 max-md:pb-0 max-md:text-xxxs
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
            src={
              attribute === undefined || attribute === null
                ? `https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/quetion-mark.png`
                : attributePokemon()
            }
            alt="pokemon-images"
            className={`m-auto block h-9/10 w-9/10 object-contain
            max-xl:h-8/10 max-xl:w-8/10
            max-lg:h-9/10 max-lg:w-9/10
            max-md:h-8/10 max-md:w-8/10`}
          ></img>
        </div>
      </div>
      <div
        className={`${
          type === undefined || null
            ? ''
            : `static bottom-0 h-1/4 w-full cursor-pointer overflow-hidden
          text-ellipsis rounded-b-xl bg-black text-white`
        }`}
      >
        <p
          className={`${
            type === undefined || null
              ? ''
              : `pt-1 pb-1 text-center text-xxs first-letter:capitalize 
                max-2xl:pt-0.5 max-2xl:pb-0.5
                max-xl:text-xxxs
                max-lg:text-xs
                max-md:pt-0 max-md:pb-0 max-md:text-xxxs
              ${
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
                key={element}
                src={`https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/pokemon_elements/${element}.png`}
                alt="normal"
                className={`m-1 h-5 w-5
                max-2xl:h-4 max-2xl:w-4
                max-xl:h-2.5 max-xl:w-2.5
                max-lg:m-1 max-lg:h-6 max-lg:w-6
                max-md:m-0.5 max-md:h-4 max-md:w-4`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialCardShowcase;
