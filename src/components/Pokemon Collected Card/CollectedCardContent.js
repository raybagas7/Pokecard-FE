import React from 'react';
import CollectedBackCard from './CollectedBackCard';
import CollectedPokemonElement from './CollectedPokemonElement';
import CollectedPokemonMoves from './CollectedPokemonMoves';
import CollectedPokemonStats from './CollectedPokemonStats';

const CollectedCardContent = ({
  card_id,
  poke_id,
  name,
  attribute,
  types,
  legendary,
  mythical,
  stats,
  move1,
  move2,
  doFlip,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
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
    (legendary === true || mythical === true) && isShiny === true
      ? (type = 'legendary-shine')
      : (legendary === true || mythical === true) && isShiny === false
      ? (type = 'legendary')
      : ((legendary === false || mythical === false) && isShiny) === true
      ? (type = 'shiny')
      : (type = 'normal');

    return type;
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  // const show = () => {
  //   console.log('ini status', stats, 'ini filternya ', allStat);
  // };
  return (
    <div className="show-card-container_collection">
      <div
        className={`show-card_collection ${
          isFlipped === true ? 'flipped' : ''
        }`}
      >
        <div className="flex-row_collection card-content_collection front-card_collection">
          <div
            className={`box_collection first-box-${pokemonType()}_collection`}
            onClick={doFlip ? toggleFlip : null}
          >
            <p className={`attribute-${pokemonType()}-id_collection`}>
              {poke_id}
            </p>
            <img
              className="sprites-image"
              src={
                !spritesUrl
                  ? 'https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/quetion-mark.png'
                  : spritesUrl
              }
              alt="images"
            />
          </div>
          <div className="box_collection second-box_collection">
            <h4 className={`attribute-${pokemonType()}_collection`}>{name}</h4>
            <CollectedPokemonElement types={allType} />
            <div className="flex-column-stats_collection">
              <div className="box-1-stats_collection">
                <CollectedPokemonStats
                  pokemonStats={allStat}
                  pokemonAttribute={attribute}
                  box="left"
                />
              </div>
              <div className="box-2-stats_collection">
                <CollectedPokemonStats
                  pokemonStats={allStat}
                  pokemonAttribute={attribute}
                  box="right"
                />
              </div>
            </div>
            <CollectedPokemonMoves move1={move1} move2={move2} />
          </div>
          {/* <button onClick={show}>ini stats</button> */}
        </div>
        <CollectedBackCard
          toggleFlip={toggleFlip}
          cardId={card_id}
          name={name}
          type={pokemonType()}
        />
      </div>
    </div>
  );
};

export default CollectedCardContent;
