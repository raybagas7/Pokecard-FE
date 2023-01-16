import React from 'react';
import '../../styles/collected-move-style.css';
import CollectedPokemonMove from './CollectedPokemonMove';

const CollectedPokemonMoves = ({ move1, move2 }) => {
  if (!move1 || !move2) {
    return null;
  }
  return (
    <div className="moves-container_collected">
      <CollectedPokemonMove move={move1} />
      <CollectedPokemonMove move={move2} />
    </div>
  );
};

export default CollectedPokemonMoves;
