import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import CardPokeball from './CardPokeball';
import PokemonElement from './PokemonElement';
import PokemonStats from './PokemonStats';

const CardContent = ({
  name,
  spritesNormal,
  spritesShiny,
  types,
  pokeid,
  speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/',
  stats,
  attribute,
}) => {
  const [Choosed, setChoosed] = useState(false);
  const [isLegendary, setIsLegendary] = useState();

  let allStat = {};
  if (stats) {
    for (let i = 0; i < stats.length; i++) {
      const name_stat = stats[i].stat.name;
      const base_stat = stats[i].base_stat;
      allStat[name_stat] = base_stat;
    }
  }

  Axios.get(`${speciesUrl}`).then((response) => {
    setIsLegendary(response.data.is_legendary);
  });

  let isLegend = '';
  isLegendary === true ? (isLegend = 'LEGEND') : (isLegend = '');

  const change = () => {
    const temp = !Choosed;
    setChoosed(temp);
  };

  const attributePokemon = () => {
    if (attribute === 'shiny') {
      return spritesShiny;
    }
    return spritesNormal;
  };

  // const show = () => {
  //   console.log('ini pokemon id di cc', isLegendary);
  // };
  return !Choosed ? (
    <div className="flex-row card-content">
      <div className="box first-box" onClick={change}>
        <p className={`attribute-${attribute}-id`}>
          {pokeid} {isLegend}
        </p>
        <img
          src={
            !spritesNormal ? './images/quetion-mark.png' : attributePokemon()
          }
          alt="images"
        />
      </div>
      <div className="box second-box">
        <h4 className={`attribute-${attribute}`}>{name}</h4>
        <PokemonElement types={types} />
        <div className="flex-column__stats">
          <div className="box-1_stats">
            <PokemonStats
              pokemonStats={stats}
              pokemonAttribute={attribute}
              box="left"
            />
          </div>
          <div className="box-2_stats">
            <PokemonStats
              pokemonStats={stats}
              pokemonAttribute={attribute}
              box="right"
            />
          </div>
        </div>
      </div>
      {/* <button onClick={show}>ini cards</button> */}
    </div>
  ) : (
    <CardPokeball change={change} attribute={attribute} />
  );
};

export default CardContent;
