import React, { useState } from 'react';
import OfferDetail from './OfferDetail';

const OfferCollection = ({ offerCards }) => {
  const { all_offer: offerCardsData } = offerCards;
  const [offersCardState, setOffersCardState] = useState(offerCardsData);

  const removeOffer = async (offerId) => {
    const newOffer = offersCardState.filter(
      (offer) => offer.offer_id !== offerId
    );

    setOffersCardState([...newOffer]);
  };
  return (
    <div>
      <div className="flex w-full p-10">
        <div className="flex w-full flex-col items-center rounded-2xl bg-gold-poke p-5">
          <div className="mb-3 w-fit rounded-2xl bg-white/50 p-2 text-2xl text-black-steam drop-shadow-lg">
            Your Offers
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-2xl bg-white/50 p-5 drop-shadow-lg">
            {offersCardState
              ? offersCardState.map((card) => (
                  <OfferDetail
                    key={card.offer_id}
                    {...card}
                    removeOffer={removeOffer}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCollection;
