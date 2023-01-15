import React, { useState } from 'react';
import UniCards from '../../UniversalCardsComponent/UniCards';
import TradeTotalOffer from './TradeTotalOffer';
import { Link } from 'react-router-dom';

const TradeCards = ({ userTrades }) => {
  const { trades: tradesCard } = userTrades;
  const [tradesCardState, setTradesCardState] = useState(tradesCard);
  console.log('imasat', tradesCardState);
  // let setAll = (obj, val) =>
  //   Object.keys(obj).forEach((k) =>
  //     k !== 'window_number' ? (obj[k] = val) : null
  //   );

  // let setNull = async (obj) => setAll(obj, null);
  // setNull(tradesCardState[0]);
  // setNull(tradesCard[0]);

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
    console.log('new', newObj);
    setTradesCardState([...newObj]);
  };

  if (!tradesCardState) {
    return <div>EMPTY</div>;
  }
  return (
    <div className="flex gap-3 text-white">
      {tradesCardState.map((card) => (
        <div
          key={card.window_number}
          className="flex flex-col rounded-2xl bg-white/50 p-3 drop-shadow-lg"
        >
          <Link to={`/trades?trader_card_id=${card.card_id}`}>
            <UniCards {...card} />
          </Link>
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
  );
};

export default TradeCards;
