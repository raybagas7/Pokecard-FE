import React from 'react';
import '../../styles/collected-pokecards-style.css';
import CollectedCard from './CollectedCard';

const CollectedCardsContainer = () => {
  return (
    <div className="collections-content">
      <div className="all-cards__container">
        <div className="collections-title">
          <h2>Pokécard Collections</h2>
        </div>
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
