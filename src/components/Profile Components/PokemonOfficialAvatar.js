import React from 'react';
const PokemonOfficialAvatar = ({ pokemonData }) => {
  console.log('aa', pokemonData);

  const allType = pokemonData.types.map((element) => {
    return element.name;
  });
  console.log('bb', allType);
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
      className={`m-3 flex flex-1 flex-col rounded-lg border-2 border-gray-500 ${
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
      <div className="flex justify-center">
        <img
          alt={`${pokemonData.poke_id}`}
          src={
            pokemonData === undefined || null
              ? `./images/quetion-mark.png`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.poke_id}.png`
          }
          className="h-auto w-9/10 animate-fade_in_slide_left rounded-lg "
        />
      </div>
      <div className="flex h-full w-full flex-1 flex-col rounded-b-lg">
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
          <p className="animate-fade_in text-2xl first-letter:capitalize max-2xl:text-base">
            {pokemonData.name}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-b-lg bg-black-steam ">
          {allType.map((element) => (
            <img
              key={element}
              src={`./images/pokemon_elements/${element}.png`}
              alt={element}
              className="m-1.5 h-9 w-9 animate-fade_in max-2xl:h-7 max-2xl:w-7"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonOfficialAvatar;
