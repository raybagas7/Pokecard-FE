import React, { useState } from 'react';
import '../../styles/collected-pokecards-style.css';
import '../../styles/page-button-style.css';
import { getCard } from '../../utils/card';
import CollectedCardContent from './CollectedCardContent';
import CollectionPageButton from './CollectionPageButton';

const CollectedCardsContainer = ({ ownedCards }) => {
  const [activePage, setActivePage] = useState(0);
  // const [isBack, setIsBack] = useState(false);
  // const [isNext, setIsNext] = useState(false);
  // const [listen, setListen] = useState(false);

  const cards = getCard();
  const { cards: ownedCollections = [] } = ownedCards;

  ownedCollections.sort((a, b) => a.poke_id - b.poke_id);

  // const min = (activePage + 1) * 24 - 24;
  // const max = (activePage + 1) * 24;
  // console.log(min, max);
  const filteredByPageCollection = [];
  const devideOwnedPokemon = Math.ceil(ownedCollections.length / 24);
  // console.log('divide', devideOwnedPokemon);
  for (let i = 0; i < devideOwnedPokemon; i++) {
    const min2 = (i + 1) * 24 - 24;
    const max2 = (i + 1) * 24;
    filteredByPageCollection.push(ownedCollections.slice(min2, max2));
  }
  // console.log(filteredByPageCollection);

  // console.log(activePage);
  // console.log(Math.round(ownedCollections.length / 24));

  // filteredByPageCollection.push(pageCollection);
  const nextActivePage = () => {
    setActivePage((prevPage) => {
      const newPage = prevPage + 1;
      return newPage;
    });
  };

  const previousActivePage = () => {
    setActivePage((prevPage) => {
      const newPage = prevPage - 1;
      return newPage;
    });
  };

  const jumpActivePage = (number) => {
    setActivePage(number);
    // console.log(number);
  };

  // const detectKeydown = (e) => {
  //   if (e) {
  //     if (e.key === 'ArrowLeft') {
  //       setIsNext(false);
  //       setIsBack(true);
  //     }
  //     if (e.key === 'ArrowRight') {
  //       setIsNext(true);
  //       setIsBack(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('keydown', detectKeydown, true);
  // }, []);

  // if (isBack && activePage !== 0) {
  //   setIsBack(false);
  //   previousActivePage();
  // }
  // if (isNext && activePage <= filteredByPageCollection.length - 2) {
  //   setIsNext(false);
  //   nextActivePage();
  // }

  return ownedCards.length !== 0 ? (
    <div className="collections-content">
      <div className="all-cards__container">
        <div className="collections-title">
          <h2>Pokécard Collections</h2>
          <CollectionPageButton
            array={filteredByPageCollection}
            activePage={activePage}
            nextActivePage={nextActivePage}
            previousActivePage={previousActivePage}
            jumpActivePage={jumpActivePage}
          />
        </div>
        {filteredByPageCollection
          ? filteredByPageCollection[activePage].map((ownedCards) => (
              <CollectedCardContent key={ownedCards.card_id} {...ownedCards} />
            ))
          : cards.map((card) => (
              <CollectedCardContent key={card.id} {...card} />
            ))}
      </div>
      {/* <button onClick={show}>ini poke</button> */}
    </div>
  ) : (
    <></>
  );
};

export default CollectedCardsContainer;
