import React from 'react';
import CollectedPokemonElement from './CollectedPokemonElement';
import CollectedPokemonStats from './CollectedPokemonStats';

const CollectedCardContent = ({
  // spritesNormal,
  // spritesShiny,
  card_id,
  poke_id,
  name,
  attribute,
  types,
  legendary,
  stats,
}) => {
  let isShiny = false;

  attribute === 'normal' ? (isShiny = false) : (isShiny = true);

  const spritesUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${
    attribute === 'normal' ? '' : '/shiny'
  }/${poke_id}.png`;

  const allType = types.map((element) => {
    return element.name;
  });

  let allStat = [];
  if (stats) {
    for (let i = 0; i < stats.length; i++) {
      const name_stat = stats[i].name;
      const base_stat = stats[i].base_stat;
      allStat.push({ [name_stat]: base_stat });
    }
  }

  const pokemonType = () => {
    if (attribute === undefined) {
      return undefined;
    }
    let type = '';
    legendary === true && isShiny === true
      ? (type = 'legendary-shine')
      : legendary === true && isShiny === false
      ? (type = 'legendary')
      : (legendary === false && isShiny) === true
      ? (type = 'shiny')
      : (type = 'normal');

    return type;
  };

  // const allType = [];
  // if (types) {
  //   for (let i = 0; i < types.length; i++) {
  //     const take = { name: types[i].type.name };
  //     allType.push(take);
  //   }
  // }

  // let statsFilter = [];
  // if (stats) {
  //   if (isShiny) {
  //     for (let i = 0; i < stats.length; i++) {
  //       const take = {
  //         base_stat: stats[i].base_stat + 10,
  //         effort: stats[i].effort,
  //         name: stats[i].stat.name,
  //       };
  //       statsFilter.push(take);
  //     }
  //   } else {
  //     for (let i = 0; i < stats.length; i++) {
  //       const take = {
  //         base_stat: stats[i].base_stat,
  //         effort: stats[i].effort,
  //         name: stats[i].stat.name,
  //       };
  //       statsFilter.push(take);
  //     }
  //   }
  // }

  // let allStat = {};
  // if (stats) {
  //   for (let i = 0; i < stats.length; i++) {
  //     const name_stat = stats[i].stat.name;
  //     const base_stat = stats[i].base_stat;
  //     allStat[name_stat] = base_stat;
  //   }
  // }

  // const cardData = {
  //   id,
  //   poke_id: pokeid,
  //   name,
  //   attribute,
  //   legendary: isLegendary,
  //   types: allType,
  //   stats: statsFilter,
  // };

  // let isLegend = '';
  // isLegendary === true ? (isLegend = 'LEGEND') : (isLegend = '');

  const change = () => {
    // const temp = !Choosed;
    // let changeBall = 0;
    // temp === true ? (changeBall = 1) : (changeBall = -1);
    // choosenPokeCards(cardData, temp);
    // ballRelated(isLegendary, isShiny, changeBall);
    // setChoosed(temp);
  };

  // const attributePokemon = () => {
  //   if (attribute === 'shiny') {
  //     return spritesShiny;
  //   }
  //   return spritesNormal;
  // };

  // const show = () => {
  //   console.log('ini status', stats, 'ini filternya ', allStat);
  // };
  return (
    <div className="flex-row card-content">
      <div className={`box first-box-${pokemonType()}`} onClick={change}>
        <p className={`attribute-${pokemonType()}-id`}>{poke_id}</p>
        <img
          src={!spritesUrl ? './images/quetion-mark.png' : spritesUrl}
          alt="images"
        />
      </div>
      <div className="box second-box">
        <h4 className={`attribute-${pokemonType()}`}>{name}</h4>
        <CollectedPokemonElement types={allType} />
        <div className="flex-column__stats">
          <div className="box-1_stats">
            <CollectedPokemonStats
              pokemonStats={allStat}
              pokemonAttribute={attribute}
              box="left"
            />
          </div>
          <div className="box-2_stats">
            <CollectedPokemonStats
              pokemonStats={allStat}
              pokemonAttribute={attribute}
              box="right"
            />
          </div>
        </div>
      </div>
      {/* <button onClick={show}>ini stats</button> */}
    </div>
  );
};

export default CollectedCardContent;
