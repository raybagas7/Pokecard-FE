import React, { useState } from 'react';
import { getTraderOfferListRefresh } from '../../../utils/network-data';
import TradeDetail from './TradeDetail';

const TradeCardContainer = ({ cardId }) => {
  const [offererTraderCards, setOffererTraderCards] = useState();
  const [initializing, setInitializing] = useState(true);
  React.useEffect(() => {
    getTraderOfferListRefresh(cardId).then(({ error, data, message }) => {
      try {
        setOffererTraderCards(data);
        setInitializing(false);
      } catch (e) {}
    });
  }, [cardId]);

  if (initializing) {
    return (
      <section className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <span className="absolute top-0 right-0 -mt-16 -mr-14 flex h-32 w-32">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex h-32 w-32 rounded-full bg-yellow-500"></span>
            </span>
          </span>
        </div>
      </section>
    );
  }
  return offererTraderCards ? (
    <div>
      <TradeDetail offererTraderCards={offererTraderCards} />
    </div>
  ) : (
    <div className="flex h-screen w-full items-center justify-center text-5xl max-md:text-3xl">
      <div className="text-center">
        There are no offers yet for this trading card
      </div>
    </div>
  );
};

export default TradeCardContainer;
