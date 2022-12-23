import React from 'react';
import '../../styles/moves-style.css';
import PokemonMove from './PokemonMove';

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

export default CollectionPokemonMoves;
