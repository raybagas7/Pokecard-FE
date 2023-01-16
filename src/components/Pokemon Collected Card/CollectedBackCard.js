import React from 'react';
import PropTypes from 'prop-types';
import CollectedCaseButton from './CollectedCaseButton';
import CollectedTradeButton from './CollectedTradeButton';

const CollectedBackCard = ({ toggleFlip, cardId, name, type }) => {
  return (
    <div
      className={`back-card_collection flex flex-col bg-fb-${type} bg-cover`}
      onClick={toggleFlip}
    >
      <p
        className={`p-2 text-center text-sm text-white ${
          type === 'normal'
            ? 'rounded-t-poke-15 bg-yellow-poke text-black'
            : type === 'shiny'
            ? 'rounded-t-poke-15 bg-orange-poke'
            : type === 'legendary'
            ? 'rounded-t-poke-15 bg-purple-poke'
            : type === 'legendary-shine'
            ? 'rounded-t-poke-15 bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
            : ''
        } 
        max-tablet:p-0.5 max-tablet:text-xxs`}
      >
        Showcases Or Trades
      </p>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 ">
          <CollectedCaseButton caseNumber={1} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={2} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={3} cardId={cardId} name={name} />
        </div>
        <div className="flex flex-1 rounded-b-poke-15">
          <CollectedCaseButton caseNumber={4} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={5} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={6} cardId={cardId} name={name} />
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t-2 border-black-steam">
        <div className="flex flex-1 ">
          <CollectedTradeButton windowNumber={1} cardId={cardId} name={name} />
          <CollectedTradeButton windowNumber={2} cardId={cardId} name={name} />
          <CollectedTradeButton windowNumber={3} cardId={cardId} name={name} />
        </div>
        <div className="flex flex-1 rounded-b-poke-15">
          <CollectedTradeButton windowNumber={4} cardId={cardId} name={name} />
          <CollectedTradeButton windowNumber={5} cardId={cardId} name={name} />
          <CollectedTradeButton windowNumber={6} cardId={cardId} name={name} />
        </div>
      </div>
    </div>
  );
};

CollectedBackCard.propTypes = {
  toggleFlip: PropTypes.func.isRequired,
};

export default CollectedBackCard;
