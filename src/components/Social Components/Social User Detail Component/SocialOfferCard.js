import React from 'react';
import SocialOfferMove from './SocialOfferMove';
import SocialOfferStats from './SocialOfferStats';

const SocialOfferCard = ({
  card_id,
  attribute,
  legendary,
  mythical,
  poke_id,
  name,
  types,
  stats,
  move1,
  move2,
  pickOfferCard,
}) => {
  const chosenOfferCard = {
    card_id,
    attribute,
    legendary,
    mythical,
    poke_id,
    name,
    types,
    stats,
    move1,
    move2,
  };

  const pickCardToOffer = () => {
    if (pickOfferCard) {
      pickOfferCard(chosenOfferCard);
    }
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

  const pokemonImage = () => {
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

  let allStat = [];
  if (stats) {
    allStat = stats.map((stat) => {
      const name = stat.name;
      return { [name]: stat.base_stat };
    });
  }

  const leftStat = allStat.slice(0, 3);
  const rightStat = allStat.slice(3, 6);

  if (attribute === null || attribute === undefined) {
    return null;
    // <div
    //   className="m-1 mt-3 flex h-56 w-40 animate-default_lift_card items-center justify-center rounded-xl
    // bg-fb-undefined bg-cover
    // max-sm:m-2"
    // >
    //   <img src={`./images/quetion-mark.png`} alt="undefined" />
    // </div>
  }

  return (
    <div
      className={`relative m-1 mt-3 h-56 w-40 animate-default_lift_card rounded-xl
      hover:animate-lift_card hover:drop-shadow-md
      max-xl:h-48 max-xl:w-32
    `}
    >
      <div
        onClick={pickCardToOffer}
        className={`relative flex h-3/4 w-full cursor-pointer flex-col rounded-t-xl bg-cover
      ${
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
          className={`rounded-t-xl p-0 indent-2 text-xxs
          before:content-['#']
          max-xl:p-0 max-xl:text-xxxs
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
                ? `./images/quetion-mark.png`
                : pokemonImage()
            }
            alt="pokemon-images"
            className={`m-auto block h-9/10 w-9/10 object-contain`}
          ></img>
        </div>
      </div>
      <div
        className={`absolute bottom-0 flex h-1/4 w-full animate-default_expand_info flex-col overflow-hidden rounded-b-xl bg-black hover:absolute hover:animate-expand_info_showcase`}
      >
        <p
          className={`${
            type === undefined || null
              ? ''
              : `p-0 text-center text-sm
              text-xxs first-letter:capitalize
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
          {name}
        </p>
        <div className="flex justify-center">
          {allElement.map((element) => (
            <img
              key={element}
              src={`./images/pokemon_elements/${element}.png`}
              alt="normal"
              className={`mt-2 mb-2 ml-1 mr-1 h-6 w-6
              max-xl:m-1 max-xl:h-5 max-xl:w-5`}
            />
          ))}
        </div>
        <div className="flex flex-1 bg-gray-700">
          <div className="mt-2 flex flex-1 flex-col">
            {leftStat !== null
              ? leftStat.map((stat) => (
                  <SocialOfferStats
                    statName={`${Object.keys(stat)}`}
                    key={Object.keys(stat)}
                    statValue={`${Object.values(stat)}`}
                  />
                ))
              : null}
            <div className="flex flex-1 flex-col justify-start p-1">
              <SocialOfferMove move={move1} />
            </div>
          </div>
          <div className="mt-2 flex flex-1 flex-col">
            {rightStat !== null
              ? rightStat.map((stat) => (
                  <SocialOfferStats
                    statName={`${Object.keys(stat)}`}
                    key={Object.keys(stat)}
                    statValue={`${Object.values(stat)}`}
                  />
                ))
              : null}
            <div className="flex flex-1 flex-col justify-start p-1">
              <SocialOfferMove move={move2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialOfferCard;
