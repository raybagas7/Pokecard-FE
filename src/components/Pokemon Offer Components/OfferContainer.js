import React from 'react';
import OfferCollection from './OfferCollection';

const OfferContainer = ({ offerCards }) => {
  return offerCards ? (
    <OfferCollection offerCards={offerCards} />
  ) : (
    <div className="flex h-screen w-full items-center justify-center text-5xl max-md:text-3xl">
      <div className="text-center">You don't have any offers</div>
    </div>
  );
};

export default OfferContainer;
