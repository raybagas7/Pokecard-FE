import React from 'react';
import UniCards from '../../UniversalCardsComponent/UniCards';
import OffererProfileInfo from './OffererProfileInfo';

const OffererCards = ({ listOffer, showOffererCard }) => {
  // console.log(offererCards);

  const topListOffer = listOffer.slice(0, 3);
  console.log(topListOffer);
  const botListOffer = listOffer.slice(3, 6);

  // const offerCards = listOffer.map((card) => {
  //   let { search_id, trainer_name, profile_img, owner, ...rest } = card;
  //   return rest;
  // });

  // const offerCardsOwner = listOffer.map((user) => {
  //   let { search_id, trainer_name, profile_img, owner } = user;

  //   return { search_id, trainer_name, profile_img, owner };
  // });
  // console.log(offerCardsOwner);

  return (
    <div className="flex h-fit w-full items-center p-3 pt-5 pb-5">
      <div className="flex h-fit w-full flex-col items-center rounded-2xl bg-gold-poke p-3 text-white drop-shadow-lg">
        <div className="mb-3 w-fit rounded-2xl bg-white/50 p-2 text-2xl text-black-steam drop-shadow-lg">
          Card Offered
        </div>
        <div className="flex h-fit w-full flex-wrap justify-center gap-3 rounded-2xl bg-white/50 p-3 text-white drop-shadow-lg">
          <div className="flex gap-3 max-md:flex-col">
            {listOffer
              ? topListOffer.map((card) => (
                  <div
                    key={card.offer_id}
                    className="relative flex h-460 w-60 flex-col items-center rounded-xl bg-white/50 p-3 drop-shadow-lg 
                    max-xl:h-72 max-xl:w-36"
                  >
                    <UniCards {...card} showOffererCard={showOffererCard} />
                    <OffererProfileInfo
                      offerId={card.offer_id}
                      trainerName={card.trainer_name}
                      searchId={card.search_id}
                      profileImg={card.profile_img}
                      pokemonName={card.name}
                    />
                  </div>
                ))
              : null}
          </div>
          <div className="flex gap-3 max-md:flex-col">
            {listOffer
              ? botListOffer.map((card) => (
                  <div
                    key={card.offer_id}
                    className="relative flex h-460 w-60 flex-col items-center rounded-xl bg-white/50 p-3 
                    max-xl:h-72 max-xl:w-36"
                  >
                    <UniCards {...card} showOffererCard={showOffererCard} />
                    <OffererProfileInfo
                      offerId={card.offer_id}
                      trainerName={card.trainer_name}
                      searchId={card.search_id}
                      profileImg={card.profile_img}
                      pokemonName={card.name}
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
