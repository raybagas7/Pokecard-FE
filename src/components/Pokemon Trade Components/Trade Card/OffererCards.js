import React from 'react';
import UniCards from '../../UniversalCardsComponent/UniCards';
import OffererProfileInfo from './OffererProfileInfo';

const OffererCards = ({ offererCards }) => {
  // console.log(offererCards);
  const { list_offer } = offererCards;
  const topListOffer = list_offer.slice(0, 3);
  const botListOffer = list_offer.slice(3, 6);
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
      <div className="h-fit w-full rounded-2xl bg-gold-poke p-5 text-white drop-shadow-lg">
        <div className="flex h-fit w-full flex-wrap justify-center gap-3 rounded-2xl bg-white/50 p-5  text-white drop-shadow-lg">
          <div className="flex gap-3 ">
            {list_offer
              ? topListOffer.map((card) => (
                  <div
                    key={card.offer_id}
                    className="relative flex h-460 w-60 flex-col items-center rounded-xl bg-white/50 p-5 "
                  >
                    <UniCards {...card} />
                    <OffererProfileInfo
                      trainerName={card.trainer_name}
                      searchId={card.search_id}
                      profileImg={card.profile_img}
                    />
                  </div>
                ))
              : null}
          </div>
          <div className="flex gap-3 ">
            {list_offer
              ? botListOffer.map((card) => (
                  <div
                    key={card.offer_id}
                    className="relative flex h-460 w-60 flex-col items-center rounded-xl bg-white/50 p-5 "
                  >
                    <UniCards {...card} />
                    <OffererProfileInfo
                      trainerName={card.trainer_name}
                      searchId={card.search_id}
                      profileImg={card.profile_img}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffererCards;
