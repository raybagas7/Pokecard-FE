import React from 'react';
import UniCards from '../../UniversalCardsComponent/UniCards';

const OffererCards = ({ offererCards }) => {
  // console.log(offererCards);
  const { list_offer } = offererCards;
  const offerCards = list_offer.map((card) => {
    let { search_id, trainer_name, profile_img, owner, ...rest } = card;
    return rest;
  });

  const offerCardsOwner = list_offer.map((user) => {
    let { search_id, trainer_name, profile_img, owner } = user;

    return { search_id, trainer_name, profile_img, owner };
  });
  // console.log(offerCardsOwner);

  return (
    <div className="flex h-fit w-full items-center p-10">
      <div className="h-fit w-full rounded-2xl bg-gold-poke p-10 text-white drop-shadow-lg">
        <div>{offerCardsOwner[0].trainer_name}</div>
        <div className="flex h-fit w-full flex-wrap justify-center gap-3 rounded-2xl bg-white/50 p-10  text-white drop-shadow-lg">
          {list_offer
            ? list_offer.map((card) => (
                <div
                  key={card.offer_id}
                  className="flex flex-col items-center  rounded-xl bg-white/50"
                >
                  <UniCards {...card} />
                  <div className="rounded-xl bg-white text-black-steam">
                    <img
                      className="max-h-20 w-auto p-2"
                      src={`./images/pokemon_elements/normal.png`}
                      alt={card.trainer_name}
                    />
                    <p>{card.trainer_name}</p>
                    <p>{card.search_id}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default OffererCards;
