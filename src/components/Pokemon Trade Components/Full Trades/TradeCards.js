import React from 'react';
import UniCards from '../../UniversalCardsComponent/UniCards';
import TradeTotalOffer from './TradeTotalOffer';
import { Link } from 'react-router-dom';

const TradeCards = ({ userTrades }) => {
  const { trades: tradesCard } = userTrades;
  //   console.log(tradesCard);

  if (!tradesCard) {
    return <div>EMPTY</div>;
  }
  return (
    <div className="flex gap-3 text-white">
      {tradesCard.map((card) => (
        <div
          key={card.window_number}
          className="rounded-2xl bg-white/50 p-3 drop-shadow-lg"
        >
          <Link to={`/trades?trader_card_id=${card.card_id}`}>
            <UniCards {...card} />
          </Link>
          <TradeTotalOffer total_offer={card.total_offer} />
        </div>
      ))}
    </div>
  );
};

export default TradeCards;
