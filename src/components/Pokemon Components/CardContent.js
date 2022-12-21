import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import CardPokeball from './CardPokeball';
import PokemonElement from './PokemonElement';
import PokemonStats from './PokemonStats';
import Swal from 'sweetalert2';

const CardContent = ({
  id,
  name,
  spritesNormal,
  spritesShiny,
  types,
  pokeid,
  speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/',
  stats,
  attribute,
  choosenPokeCards,
  ballRelated,
  pickedBall,
  ownedBall,
}) => {
  const [Choosed, setChoosed] = useState(false);
  const [isLegendary, setIsLegendary] = useState();
  // const [ballType, setBallType] = useState(0);
  let isShiny = false;
  attribute === 'normal' ? (isShiny = false) : (isShiny = true);

  let ownedBallType = 0;
  let pickedBallType = 0;
  let ballName = '';

  if (ownedBall) {
    if (isLegendary === true && isShiny === true) {
      ownedBallType = ownedBall.masterBall;
      pickedBallType = pickedBall.masterball_amount;
      ballName = 'MasterBall';
    } else if (isLegendary === true && isShiny === false) {
      ownedBallType = ownedBall.masterBall;
      pickedBallType = pickedBall.masterball_amount;
      ballName = 'MasterBall';
    } else if (isLegendary === false && isShiny === true) {
      ownedBallType = ownedBall.ultraBall;
      pickedBallType = pickedBall.ultraball_amount;
      ballName = 'UltraBall';
    } else {
      ownedBallType = ownedBall.pokeBall;
      pickedBallType = pickedBall.pokeball_amount;
      ballName = 'PokeBall';
    }
  }

  const pokemonType = () => {
    if (attribute === undefined) {
      return undefined;
    }
    let type = '';
    isLegendary === true && isShiny === true
      ? (type = 'legendary-shine')
      : isLegendary === true && isShiny === false
      ? (type = 'legendary')
      : (isLegendary === false && isShiny) === true
      ? (type = 'shiny')
      : (type = 'normal');

    return type;
  };

  const allType = [];
  if (types) {
    for (let i = 0; i < types.length; i++) {
      const take = { name: types[i].type.name };
      allType.push(take);
    }
  }

  let statsFilter = [];
  if (stats) {
    if (isShiny) {
      for (let i = 0; i < stats.length; i++) {
        const take = {
          base_stat: stats[i].base_stat + 10,
          effort: stats[i].effort,
          name: stats[i].stat.name,
        };
        statsFilter.push(take);
      }
    } else {
      for (let i = 0; i < stats.length; i++) {
        const take = {
          base_stat: stats[i].base_stat,
          effort: stats[i].effort,
          name: stats[i].stat.name,
        };
        statsFilter.push(take);
      }
    }
  }

  let allStat = {};
  if (stats) {
    for (let i = 0; i < stats.length; i++) {
      const name_stat = stats[i].stat.name;
      const base_stat = stats[i].base_stat;
      allStat[name_stat] = base_stat;
    }
  }

  const cardData = {
    id,
    poke_id: pokeid,
    name,
    attribute,
    legendary: isLegendary,
    types: allType,
    stats: statsFilter,
  };

  Axios.get(`${speciesUrl}`).then((response) => {
    setIsLegendary(response.data.is_legendary);
  });

  const change = () => {
    const temp = !Choosed;
    let changeBall = 0;
    temp === true ? (changeBall = 1) : (changeBall = -1);
    const pickedBallTemp = pickedBallType + changeBall;
    // console.log('picked ', pickedBallTemp);
    // console.log('owned ', ownedBallType);
    if (ownedBallType < pickedBallTemp) {
      Swal.fire({
        title: `You run out of ${ballName}`,
        customClass: {
          popup: `colored-toast-${pokemonType()} colored-toast`,
          closeButton: 'colored-toast-close',
        },
      });
    } else {
      choosenPokeCards(cardData, temp);
      ballRelated(isLegendary, isShiny, changeBall);
      setChoosed(temp);
    }
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
    pokemonType() === undefined ? (
      <div className="flex-row card-content">
        <div className={`box first-box-${pokemonType()}`}>
          <p className={`attribute-${pokemonType()}-id`}>{pokeid}</p>
          <img
            src={
              !spritesNormal ? './images/quetion-mark.png' : attributePokemon()
            }
            alt="images"
          />
        </div>

        {/* <button onClick={show}>ini cards</button> */}
      </div>
    ) : (
      <div className="flex-row card-content">
        <div className={`box first-box-${pokemonType()}`} onClick={change}>
          <p className={`attribute-${pokemonType()}-id`}>{pokeid}</p>
          <img
            src={
              !spritesNormal ? './images/quetion-mark.png' : attributePokemon()
            }
            alt="images"
          />
        </div>
        <div className="box second-box">
          <h4 className={`attribute-${pokemonType()}`}>{name}</h4>
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
    )
  ) : (
    <CardPokeball change={change} isShiny={isShiny} isLegendary={isLegendary} />
  );
};

export default CardContent;
