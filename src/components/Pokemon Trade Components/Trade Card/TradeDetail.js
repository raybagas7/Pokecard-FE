import React from 'react';
import OffererCards from './OffererCards';

const TradeDetail = ({ offererCards }) => {
  //   const { list_offer } = offererCards;
  //   const offerCards = list_offer.map((card) => {
  //     let { search_id, trainer_name, profile_img, owner, ...rest } = card;
  //     return rest;
  //   });

  //   const offerCardsOwner = list_offer.map((user) => {
  //     let { search_id, trainer_name, profile_img, owner } = user;

  //     return { search_id, trainer_name, profile_img, owner };
  //   });

  return (
    <div>
      <OffererCards offererCards={offererCards} />
    </div>
  );
};

export default TradeDetail;
