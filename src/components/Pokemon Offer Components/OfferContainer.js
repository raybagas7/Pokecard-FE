import React from 'react';
import OfferCollection from './OfferCollection';

const OfferContainer = ({ offerCards }) => {
  return offerCards ? (
    <OfferCollection offerCards={offerCards} />
  ) : (
    <div>
      <div>Nothing</div>
    </div>
  );
};

export default OfferContainer;
