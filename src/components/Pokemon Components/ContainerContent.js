import React from 'react';
import CardContent from './CardContent';
import PropTypes from 'prop-types';
import CardContentUndefined from './CardContentUndefined';

const ContainerContent = ({
  cards,
  pokemonId,
  addOrRemoveCard,
  ballRelated,
  pickedBall,
  ownedBall,
}) => {
  return (
    <div className="flex-column container-content__first">
      <div className="flex">
        {pokemonId
          ? pokemonId
              .slice(0, 3)
              .map((pokemonId) => (
                <CardContent
                  key={pokemonId.id}
                  {...pokemonId}
                  addOrRemoveCard={addOrRemoveCard}
                  ballRelated={ballRelated}
                  pickedBall={pickedBall}
                  ownedBall={ownedBall}
                />
              ))
          : cards.map((card) => (
              <CardContentUndefined key={card.id} {...card} />
            ))}
      </div>
      <div className="flex">
        {pokemonId
          ? pokemonId
              .slice(3, 6)
              .map((pokemonId) => (
                <CardContent
                  key={pokemonId.id}
                  {...pokemonId}
                  addOrRemoveCard={addOrRemoveCard}
                  ballRelated={ballRelated}
                  pickedBall={pickedBall}
                  ownedBall={ownedBall}
                />
              ))
          : cards.map((card) => (
              <CardContentUndefined key={card.id} {...card} />
            ))}
      </div>
    </div>
  );
};

ContainerContent.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemonId: PropTypes.arrayOf(PropTypes.object),
  addOrRemoveCard: PropTypes.func.isRequired,
  ballRelated: PropTypes.func.isRequired,
  pickedBall: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  ownedBall: PropTypes.objectOf(PropTypes.number),
};

export default ContainerContent;
