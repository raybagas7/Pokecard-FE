import React from 'react';
import PropTypes from 'prop-types';
import { elementUrl } from '../../utils/element';

const PokemonElement = ({ types }) => {
  const allType = [];
  if (types) {
    for (let i = 0; i < types.length; i++) {
      const take = types[i].type.name;
      allType.push(take);
    }
  }

  return (
    <div className="all-elemets">
      <div className="pokemon-types">
        {allType.map((element) => (
          <div className="spesific-element" key={element}>
            <img
              key={element}
              src={elementUrl
                .filter(
                  (chosenElement) =>
                    chosenElement.id.toLowerCase() === element.toLowerCase()
                )
                .map((chosenElement) => chosenElement.imageUrl)}
              alt={element}
            ></img>
            <div className={`tooltip-text tooltip-${element}`}>
              <p className="toolip-content">{element}</p>
            </div>
          </div>
        ))}
        {/* <button onClick={show}>ini elements</button> */}
      </div>
    </div>
  );
};

PokemonElement.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonElement;
