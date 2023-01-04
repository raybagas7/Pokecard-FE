import React, { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import CardPokeball from './CardPokeball';
import PokemonElement from './PokemonElement';
import PokemonStats from './PokemonStats';
import Swal from 'sweetalert2';
import PokemonMoves from './PokemonMoves';
import PropTypes from 'prop-types';

const CardContent = ({
  id,
  name,
  spritesNormal,
  spritesShiny,
  animatedSpritesNormal,
  animatedSpritesShiny,
  types,
  pokeid,
  speciesUrl,
  moves,
  stats,
  attribute,
  addOrRemoveCard,
  ballRelated,
  pickedBall,
  ownedBall,
}) => {
  const [Choosed, setChoosed] = useState(false);
  const [isLegendary, setIsLegendary] = useState();
  const [isMythical, setIsMythical] = useState();
  const [moveOne, setMoveOne] = useState();
  const [moveTwo, setMoveTwo] = useState();
  // console.log('myth', isMythical);
  // const [ballType, setBallType] = useState(0);
  let isShiny = false;
  attribute === 'normal' ? (isShiny = false) : (isShiny = true);

  let ownedBallType = 0;
  let pickedBallType = 0;
  let ballName = '';

  if (ownedBall) {
    if ((isLegendary === true || isMythical === true) && isShiny === true) {
      ownedBallType = ownedBall.masterBall;
      pickedBallType = pickedBall.masterball_amount;
      ballName = 'MasterBall';
    } else if (
      (isLegendary === true || isMythical === true) &&
      isShiny === false
    ) {
      ownedBallType = ownedBall.masterBall;
      pickedBallType = pickedBall.masterball_amount;
      ballName = 'MasterBall';
    } else if (
      (isLegendary === false || isMythical === false) &&
      isShiny === true
    ) {
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
    if (attribute === null || attribute === undefined) {
      return undefined;
    }
    let type = '';
    (isLegendary === true || isMythical === true) && isShiny === true
      ? (type = 'legendary-shine')
      : (isLegendary === true || isMythical === true) && isShiny === false
      ? (type = 'legendary')
      : ((isLegendary === false || isMythical === false) && isShiny) === true
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

  useEffect(() => {
    if (speciesUrl) {
      Axios.get(`${speciesUrl}`).then((response) => {
        setIsLegendary(response.data.is_legendary);
        setIsMythical(response.data.is_mythical);
      });
    }
    if (moves) {
      Axios.get(`${moves[0].url}`).then((response) => {
        // console.log('cc', response.data);
        setMoveOne({
          id: response.data.id,
          name: moves[0].name,
          accuracy: response.data.accuracy,
          power: response.data.power,
          pp: response.data.pp,
          ailment: response.data.meta.ailment.name,
          ailment_chance: response.data.meta.ailment_chance,
          category: response.data.meta.category.name,
          crit_rate: response.data.meta.crit_rate,
          drain: response.data.meta.drain,
          flinch_chance: response.data.meta.flinch_chance,
          healing: response.data.meta.healing,
          max_hits: response.data.meta.max_hits,
          max_turns: response.data.meta.max_turns,
          min_hits: response.data.meta.min_hits,
          min_turns: response.data.meta.min_turns,
          stat_chance: response.data.meta.stat_chance,
          type: response.data.type.name,
        });
      });
      Axios.get(`${moves[1].url}`).then((response) => {
        // console.log(response);
        setMoveTwo({
          id: response.data.id,
          name: moves[1].name,
          accuracy: response.data.accuracy,
          power: response.data.power,
          pp: response.data.pp,
          ailment: response.data.meta.ailment.name,
          ailment_chance: response.data.meta.ailment_chance,
          category: response.data.meta.category.name,
          crit_rate: response.data.meta.crit_rate,
          drain: response.data.meta.drain,
          flinch_chance: response.data.meta.flinch_chance,
          healing: response.data.meta.healing,
          max_hits: response.data.meta.max_hits,
          max_turns: response.data.meta.max_turns,
          min_hits: response.data.meta.min_hits,
          min_turns: response.data.meta.min_turns,
          stat_chance: response.data.meta.stat_chance,
          type: response.data.type.name,
        });
      });
    }
  }, [speciesUrl, moves]);

  const cardData = {
    id,
    poke_id: pokeid,
    name,
    attribute,
    legendary: isLegendary,
    mythical: isMythical,
    types: allType,
    stats: statsFilter,
    move1: moveOne,
    move2: moveTwo,
  };
  // console.log('aa', moves[1].url);

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
      addOrRemoveCard(cardData, temp);
      ballRelated(isLegendary, isMythical, isShiny, changeBall);
      setChoosed(temp);
    }
  };

  const attributePokemon = () => {
    // if (animatedSpritesNormal && animatedSpritesShiny) {
    //   if (attribute === 'shiny') {
    //     return animatedSpritesShiny;
    //   }
    //   return animatedSpritesNormal;
    // }
    if (attribute === 'shiny') {
      return spritesShiny;
    }
    return spritesNormal;
  };

  // const show = () => {
  //   console.log('firstMoveDetail ', moveOne);
  //   console.log('secondMoveDetail ', moveTwo);
  // };
  return !Choosed ? (
    pokemonType() === undefined ? (
      <div className="card-content flex-row-card">
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
      <div className="card-content flex-row-card">
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
          <PokemonMoves move1={moveOne} move2={moveTwo} />
        </div>
        {/* <button onClick={show}>ini cards</button> */}
      </div>
    )
  ) : (
    <CardPokeball
      change={change}
      isShiny={isShiny}
      isLegendary={isLegendary}
      isMythical={isMythical}
    />
  );
};

CardContent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  spritesNormal: PropTypes.string,
  spritesShiny: PropTypes.string,
  animatedSpritesNormal: PropTypes.string,
  animatedSpritesShiny: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.object),
  pokeid: PropTypes.number,
  speciesUrl: PropTypes.string,
  moves: PropTypes.arrayOf(PropTypes.object),
  stats: PropTypes.arrayOf(PropTypes.object),
  attribute: PropTypes.string,
  addOrRemoveCard: PropTypes.func.isRequired,
  ballRelated: PropTypes.func.isRequired,
  pickedBall: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  ownedBall: PropTypes.objectOf(PropTypes.number),
};

export default CardContent;
