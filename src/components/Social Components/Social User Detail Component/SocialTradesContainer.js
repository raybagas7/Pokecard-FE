import React, { useState } from 'react';
import SocialTradeCard from './SocialTradeCard';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiCardExchange } from 'react-icons/gi';

const SocialTradesContainer = ({ tradeCards }) => {
  const [chosenTradeCard, setChosenTradeCard] = useState();
  const [showOffering, setShowOffering] = useState();
  const [Choosed, setChoosed] = useState(false);
  //   console.log('showtradeT', tradeCards);
  const firstBoxTrades = tradeCards.slice(0, 3);
  const secondBoxTrades = tradeCards.slice(3, 6);
  //   console.log('showtradeT', firstBoxTrades);
  console.log(chosenTradeCard);

  const change = () => {
    const temp = !Choosed;
    setChoosed(temp);
    console.log(Choosed);
  };

  const closeOffer = () => {
    const temp = !Choosed;
    setChoosed(temp);
    setChosenTradeCard(null);
  };

  const pickTradeCard = (card) => {
    setChosenTradeCard(card);
  };

  return !Choosed ? (
    <div className="group/trade flex flex-1 flex-wrap items-center justify-center rounded-lg">
      <div className="flex max-sm:flex-1 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
        {firstBoxTrades.map((trade) => (
          <SocialTradeCard
            key={`trade-${trade.window_number}`}
            {...trade}
            change={change}
            pickTradeCard={pickTradeCard}
          />
        ))}
      </div>
      <div className="flex max-sm:flex-1 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
        {secondBoxTrades.map((trade) => (
          <SocialTradeCard
            key={`trade-${trade.window_number}`}
            {...trade}
            change={change}
            pickTradeCard={pickTradeCard}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="group/trade flex h-720 w-full animate-default_quantum rounded-lg bg-gold-poke">
      <AiFillCloseCircle
        className="absolute top-0 right-0 m-3 h-10 w-10 cursor-pointer text-black-steam
        transition hover:scale-125 hover:text-red-poke"
        onClick={closeOffer}
      />
      <div className="flex h-fit w-full justify-center rounded-t-lg">
        <div className="m-3 flex items-center rounded-lg bg-white/50 shadow-md">
          <SocialTradeCard
            key={`trade-${chosenTradeCard.window_number}`}
            {...chosenTradeCard}
          />
          <GiCardExchange className="h-10 w-10 animate-spinner text-black-steam animation-delay-500" />
          <SocialTradeCard />
        </div>
      </div>
    </div>
  );
};

export default SocialTradesContainer;
