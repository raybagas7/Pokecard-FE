import React from 'react';
import { elementUrl } from '../../utils/element';
const PokemonOfficialAvatar = ({ pokemonData }) => {
  const allType = pokemonData.types.map((element) => {
    return element.name;
  });
  let type = '';
  (pokemonData.legendary === true || pokemonData.mythical === true) &&
  pokemonData.attribute === 'shiny'
    ? (type = 'legendary-shine')
    : (pokemonData.legendary === true || pokemonData.mythical === true) &&
      pokemonData.attribute !== 'shiny'
    ? (type = 'legendary')
    : ((pokemonData.legendary === false || pokemonData.mythical === false) &&
        pokemonData.attribute) === 'shiny'
    ? (type = 'shiny')
    : (type = 'normal');

  return (
    <div
      className="flex flex-1 items-center
    max-md:h-auto max-md:w-48"
    >
      <div
        className={`m-3 flex h-auto w-9/10 flex-1 flex-col rounded-lg border-2 border-gray-500 
      max-xl:h-auto max-xl:w-8/10 
      max-md:h-9/10 max-md:w-9/10
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
      } bg-cover`}
      >
        <div
          className="flex h-96 w-auto items-center justify-center
        max-2xl:h-80
        max-xl:h-60
        max-lg:h-72
        max-md:h-44"
        >
          <img
            alt={`${pokemonData.poke_id}`}
            src={
              pokemonData === undefined || null
                ? `https://firebasestorage.googleapis.com/v0/b/pokecard-agas.appspot.com/o/misc%2Fquetion-mark.png?alt=media&token=225670ea-f313-4abe-9e19-788f6bf619f8`
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.poke_id}.png`
            }
            className="h-auto w-9/10 animate-fade_in_slide_left rounded-lg
            max-md:animate-none"
          />
        </div>
        <div className="flex h-full w-full flex-col rounded-b-lg">
          <div
            className={`flex flex-1 items-center justify-center  ${
              type === 'normal'
                ? 'bg-yellow-300 text-black'
                : type === 'shiny'
                ? 'bg-orange-400'
                : type === 'legendary'
                ? 'bg-purple-600 '
                : type === 'legendary-shine'
                ? 'bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
                : ''
            }`}
          >
            <p
              className="animate-fade_in text-2xl first-letter:capitalize max-2xl:text-base
            max-md:animate-none max-md:text-xs"
            >
              {pokemonData.name}
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-b-lg bg-black-steam ">
            {allType.map((element) => (
              <img
                key={element}
                src={elementUrl
                  .filter(
                    (chosenElement) =>
                      chosenElement.id.toLowerCase() === element.toLowerCase()
                  )
                  .map((chosenElement) => chosenElement.imageUrl)}
                alt={element}
                className="m-1.5 h-9 w-9 animate-fade_in max-2xl:h-7 max-2xl:w-7
                max-md:h-5 max-md:w-5 max-md:animate-none"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonOfficialAvatar;
