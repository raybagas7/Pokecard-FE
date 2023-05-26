import React from 'react';
import { elementUrl } from '../../utils/element';

const CollectedPokemonElement = ({ types }) => {
  //   const show = () => {
  //     console.log('ini pokemon id di cc', types, ' ini all type ', allType);
  //   };

  return (
    <div className="all-elemets_collection">
      <div className="pokemon-types_collection">
        {types.map((element) => (
          <div className="spesific-element_collection" key={element}>
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
            <div
              className={`tooltip-text_collection tooltip-${element}_collection`}
            >
              <p className="toolip-content_collection">{element}</p>
            </div>
          </div>
        ))}
        {/* <button onClick={show}>ini elements</button> */}
      </div>
    </div>
  );
};

export default CollectedPokemonElement;
