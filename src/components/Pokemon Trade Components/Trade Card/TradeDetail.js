import React, { useState } from 'react';
import UniCards from '../../UniversalCardsComponent/UniCards';
import UniPolarStats from '../../UniversalCardsComponent/UniPolarStats';
import { AiOutlineSwap } from 'react-icons/ai';
import OffererCards from './OffererCards';

const TradeDetail = ({ offererTraderCards }) => {
  const [chosenOfferCard, setChosenOfferCard] = useState();
  const showOffererCard = (card) => {
    setChosenOfferCard(card);
  };
  const { list_offer, traderCard } = offererTraderCards;

  return (
    <div>
      <div className="flex h-fit w-full items-center justify-center p-10 pt-5 pb-5">
        <div className="flex h-fit w-fit flex-col items-center rounded-2xl bg-gold-poke p-5 text-white drop-shadow-lg">
          <div className="mb-3 w-fit rounded-2xl bg-white/50 p-2 text-2xl text-black-steam drop-shadow-lg">
            <p>Comparation</p>
          </div>
          <div className="flex items-center">
            <div
              className="m-2 flex h-fit w-full flex-wrap items-center justify-center gap-3 rounded-2xl bg-white/50 p-5 text-white drop-shadow-lg
            max-lg:p-3"
            >
              <UniCards {...traderCard[0]} />
              <div
                className="flex h-full w-full flex-1
              max-lg:hidden"
              >
                <UniPolarStats stats={traderCard[0].stats} />
              </div>
            </div>
            <div>
              <AiOutlineSwap
                className="h-16 w-16 text-black-steam
            max-sm:h-7 max-sm:w-7"
              />
            </div>
            <div
              className="m-2 flex h-fit w-full flex-wrap items-center justify-center gap-3 rounded-2xl bg-white/50 p-5  text-white drop-shadow-lg
            max-lg:p-3"
            >
              <UniCards
                {...chosenOfferCard}
                key={chosenOfferCard ? chosenOfferCard.offer_id : null}
              />
              <div
                className="flex h-full w-full flex-1
              max-lg:hidden"
              >
                <UniPolarStats
                  stats={chosenOfferCard ? chosenOfferCard.stats : null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OffererCards listOffer={list_offer} showOffererCard={showOffererCard} />
    </div>
  );
};

export default TradeDetail;
