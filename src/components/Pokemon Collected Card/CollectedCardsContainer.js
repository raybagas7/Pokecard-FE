import React from 'react';
import '../../styles/collected-pokecards-style.css';
import CollectedCard from './CollectedCard';

const CollectedCardsContainer = () => {
  return (
    <div className="collections-content">
      <div className="all-cards__container">
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
        <CollectedCard />
      </div>
    </div>
  );
};

export default CollectedCardsContainer;
