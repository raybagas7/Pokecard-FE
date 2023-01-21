import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CollectedCaseButton from './CollectedCaseButton';
import CollectedTradeButton from './CollectedTradeButton';

const CollectedBackCard = ({ toggleFlip, cardId, name, type }) => {
  const [showOrHideCase, setShowOrHideCase] = useState(
    'animate-default_quantum_bouncing'
  );
  const [showOrHideCaseNumber, setShowOrHideCaseNumber] = useState('invisible');

  const [showOrHideTrade, setShowOrHideTrade] = useState(
    'animate-default_quantum_bouncing'
  );
  const [showOrHideTradeNumber, setShowOrHideTradeNumber] =
    useState('invisible');

  const showHideTrade = () => {
    showOrHideTrade === 'animate-default_quantum_bouncing'
      ? setShowOrHideTrade('animate-fade_out_quantum_bouncing')
      : setShowOrHideTrade('animate-default_quantum_bouncing');

    showOrHideTradeNumber === 'animate-default_quantum_bouncing'
      ? setShowOrHideTradeNumber('animate-fade_out_quantum_bouncing')
      : setShowOrHideTradeNumber('animate-default_quantum_bouncing');

    // setIsLogin(!isLogin);
  };

  const showHideCase = () => {
    showOrHideCase === 'animate-default_quantum_bouncing'
      ? setShowOrHideCase('animate-fade_out_quantum_bouncing')
      : setShowOrHideCase('animate-default_quantum_bouncing');

    showOrHideCaseNumber === 'animate-default_quantum_bouncing'
      ? setShowOrHideCaseNumber('animate-fade_out_quantum_bouncing')
      : setShowOrHideCaseNumber('animate-default_quantum_bouncing');

    // setIsLogin(!isLogin);
  };

  return (
    <div
      className={`back-card_collection flex flex-col bg-fb-${type} bg-cover`}
    >
      <p
        onClick={toggleFlip}
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
        FLIP
      </p>
      <div className="relative flex flex-1 flex-col">
        <div className={`${showOrHideCase} absolute flex h-full w-full`}>
          <div className="flex flex-1 items-center justify-center">
            <button
              onClick={showHideCase}
              className={`absolute rounded-lg bg-black-steam p-1.5 text-base text-white transition hover:scale-125 hover:bg-orange-poke 
        max-tablet:p-1 max-tablet:text-xxs`}
            >
              Showcases
            </button>
          </div>
        </div>
        <div
          className={`${showOrHideCaseNumber} flex flex-1`}
          onClick={showHideCase}
        >
          <CollectedCaseButton caseNumber={1} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={2} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={3} cardId={cardId} name={name} />
        </div>
        <div
          className={`${showOrHideCaseNumber}  flex flex-1`}
          onClick={showHideCase}
        >
          <CollectedCaseButton caseNumber={4} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={5} cardId={cardId} name={name} />
          <CollectedCaseButton caseNumber={6} cardId={cardId} name={name} />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col border-t-2 border-black-steam">
        <div
          className={`${showOrHideTrade} absolute flex h-full w-full rounded-b-poke-15`}
        >
          <div className="flex flex-1 items-center justify-center">
            <button
              onClick={showHideTrade}
              className={`absolute rounded-lg bg-black-steam p-1.5 text-base text-white transition hover:scale-125 hover:bg-orange-poke 
        max-tablet:p-1 max-tablet:text-xxs`}
            >
              Set Trades
            </button>
          </div>
        </div>
        <div
          className={`${showOrHideTradeNumber} flex flex-1`}
          onClick={showHideTrade}
        >
          <CollectedTradeButton windowNumber={1} cardId={cardId} name={name} />
          <CollectedTradeButton windowNumber={2} cardId={cardId} name={name} />
          <CollectedTradeButton windowNumber={3} cardId={cardId} name={name} />
        </div>
        <div
          className={`${showOrHideTradeNumber} flex flex-1 rounded-b-poke-15`}
          onClick={showHideTrade}
        >
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
