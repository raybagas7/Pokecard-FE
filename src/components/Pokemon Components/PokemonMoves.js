import React from 'react';
import '../../styles/moves-style.css';
import PokemonMove from './PokemonMove';
import PropTypes from 'prop-types';

const CollectionPokemonMoves = ({ move1, move2 }) => {
  if (!move1 || !move2) {
    return null;
  }
  return (
    <div className="moves-container">
      <PokemonMove move={move1} />
      <PokemonMove move={move2} />
    </div>
  );
};

CollectionPokemonMoves.propTypes = {
  move1: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  move2: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default CollectionPokemonMoves;
