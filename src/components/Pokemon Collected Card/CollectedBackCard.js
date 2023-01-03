import React from 'react';
import PropTypes from 'prop-types';
import CollectedCaseButton from './CollectedCaseButton';

const CollectedBackCard = ({ toggleFlip, cardId, name, type }) => {
  return (
    <div
      className={`back-card_collection flex flex-col bg-fb-${type} bg-cover`}
      onClick={toggleFlip}
    >
      <p
        className={`p-2 text-center text-sm text-white ${
          type === 'normal'
            ? 'rounded-t-poke-15 bg-yellow-300 text-black'
            : type === 'shiny'
            ? 'rounded-t-poke-15 bg-orange-400'
            : type === 'legendary'
            ? 'rounded-t-poke-15 bg-purple-600'
            : type === 'legendary-shine'
            ? 'rounded-t-poke-15 bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
            : ''
        } 
        max-tablet:text-xxs`}
      >
        Apply To Showcases
      </p>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 ">
          <CollectedCaseButton caseNumber={1} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={2} cardId={cardId} name={name} />
        </div>
        <div className="flex flex-1">
          <CollectedCaseButton caseNumber={3} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={4} cardId={cardId} name={name} />
        </div>
        <div className="flex flex-1 rounded-b-poke-15">
          <CollectedCaseButton caseNumber={5} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={6} cardId={cardId} name={name} />
        </div>
      </div>
    </div>
  );
};

CollectedBackCard.propTypes = {
  toggleFlip: PropTypes.func.isRequired,
};

export default CollectedBackCard;
