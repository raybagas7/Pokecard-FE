import React from 'react';
import PropTypes from 'prop-types';

const PokemonMove = ({ move }) => {
  return (
    <div className="move-small-container">
      <div className={`move-identifier ailment-${move.ailment}`}>
        <p className="move-id">#{move.id}</p>
        <p
          className={`move-ailment ailment-text-${move.ailment} 
          max-sm:w-5 max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap`}
        >
          {move.ailment ? move.ailment : 'null'}
        </p>
      </div>
      <div className={`move-core move-type-${move.type}`}>
        <div className="move-element">
          <img
            src={`https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/pokemon_elements/${move.type}.png`}
            alt="snoop"
          />
        </div>
        <p className="move-name">{move.name}</p>
      </div>
      <div className="move-detail">
        <p className="move-power">{move.power ? move.power : '-'}</p>
        <p className="move-accuracy">{move.accuracy ? move.accuracy : '-'}</p>
        <p className="move-pp">{move.pp ? move.pp : '-'}</p>
      </div>
    </div>
  );
};

PokemonMove.propTypes = {
  move: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default PokemonMove;
