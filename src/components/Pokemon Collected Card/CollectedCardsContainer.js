import React from 'react';
import '../../styles/collected-pokecards-style.css';
import { getCard } from '../../utils/card';
import CollectedCardContent from './CollectedCardContent';

const CollectedCardsContainer = ({ ownedCards }) => {
  const cards = getCard();
  const { cards: ownedCollections } = ownedCards;
  // const show = () => {
  //   const { cards } = ownedCards;
  //   console.log(cards);
  // };
  return ownedCards.length !== 0 ? (
    <div className="collections-content">
      <div className="all-cards__container">
        <div className="collections-title">
          <h2>Pokécard Collections</h2>
        </div>

        {ownedCollections
          ? ownedCollections.map((ownedCards) => (
              <CollectedCardContent key={ownedCards.card_id} {...ownedCards} />
            ))
          : cards.map((card) => (
              <CollectedCardContent key={card.id} {...card} />
            ))}
      </div>
      {/* <button onClick={show}>ini poke</button> */}
    </div>
  ) : (
    <div>
      <p>empty</p>
    </div>
  );
};

export default CollectedCardsContainer;
