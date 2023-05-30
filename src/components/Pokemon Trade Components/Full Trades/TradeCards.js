import React, { useState } from 'react';
import UniCards from '../../UniversalCardsComponent/UniCards';
import TradeTotalOffer from './TradeTotalOffer';

const TradeCards = ({ userTrades }) => {
  const { trades: tradesCard } = userTrades;
  const [tradesCardState, setTradesCardState] = useState(tradesCard);

  const removeTradesCard = async (windowNumber) => {
    const g = async (obj) => {
      const a = obj;
      let setAll = (obj, val) =>
        Object.keys(obj).forEach((k) =>
          k !== 'window_number' ? (obj[k] = val) : null
        );

      let setNull = async (obj) => setAll(obj, null);
      setNull(a[windowNumber]);
      return a;
    };

    const newObj = await g(tradesCard, null);
    setTradesCardState([...newObj]);
  };

  if (!tradesCardState) {
    return <div>EMPTY</div>;
  }
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 text-white
    max-sm:gap-1"
    >
      <div
        className="flex gap-3
      max-sm:flex-col max-sm:gap-2"
      >
        {tradesCardState.slice(0, 3).map((card) => (
          <div
            key={card.window_number}
            className="flex flex-col rounded-2xl bg-white/50 p-3 drop-shadow-lg
            max-sm:p-1"
          >
            {card.card_id ? (
              <UniCards
                {...card}
                goTo={`/trades?trader_card_id=${card.card_id}`}
                linkType={true}
              />
            ) : (
              <UniCards {...card} />
            )}

            <TradeTotalOffer
              totalOffer={card.total_offer}
              cardId={card.card_id}
              windowNumber={card.window_number}
              pokemonName={card.name}
              removeTradesCard={removeTradesCard}
            />
          </div>
        ))}
      </div>
      <div
        className="flex gap-3
      max-sm:flex-col max-sm:gap-2"
      >
        {tradesCardState.slice(3, 6).map((card) => (
          <div
            key={card.window_number}
            className="flex flex-col rounded-2xl bg-white/50 p-3 drop-shadow-lg
            max-sm:p-1"
          >
            {card.card_id ? (
              <UniCards
                {...card}
                goTo={`/trades?trader_card_id=${card.card_id}`}
                linkType={true}
              />
            ) : (
              <UniCards {...card} />
            )}

            <TradeTotalOffer
              totalOffer={card.total_offer}
              cardId={card.card_id}
              windowNumber={card.window_number}
              pokemonName={card.name}
              removeTradesCard={removeTradesCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeCards;
