import React, { useState } from 'react';
import '../../styles/collected-pokecards-style.css';
import '../../styles/page-button-style.css';
import { getCard } from '../../utils/card';
import CollectedCardContent from './CollectedCardContent';
import CollectionPageButton from './CollectionPageButton';
import useInput from '../../hooks/useInput';

const CollectedCardsContainer = ({ ownedCards }) => {
  const [searchPokemon, handleSearchPokemon] = useInput('');
  const [activePage, setActivePage] = useState(0);

  const cards = getCard();
  const { cards: ownedCollections = [] } = ownedCards;
  ownedCollections.sort((a, b) => a.poke_id - b.poke_id);

  const onSearchPokemonHandler = () => {
    const foundPokemon = ownedCollections.filter((collection) =>
      collection.name.toLowerCase().includes(searchPokemon.toLowerCase())
    );

    return foundPokemon;
  };

  const filteredByPageCollection = [];
  const devideOwnedPokemon = Math.ceil(onSearchPokemonHandler().length / 24);

  for (let i = 0; i < devideOwnedPokemon; i++) {
    const min2 = (i + 1) * 24 - 24;
    const max2 = (i + 1) * 24;
    filteredByPageCollection.push(onSearchPokemonHandler().slice(min2, max2));
  }

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
    // if (searchPokemon !== '') {
    //   setActivePage(0);
    // }
  };

  return onSearchPokemonHandler().length !== 0 ? (
    <div className="collections-content">
      <div className="all-cards__container">
        <div className="collections-title">
          <p className="text-center text-2xl">Pokécard Collections</p>
          <CollectionPageButton
            array={filteredByPageCollection}
            activePage={activePage}
            nextActivePage={nextActivePage}
            previousActivePage={previousActivePage}
            jumpActivePage={jumpActivePage}
          />
          <div className="mt-2 flex justify-center">
            <form>
              <input
                type="text"
                className="rounded-full p-2 indent-2 text-sm"
                value={searchPokemon}
                onChange={handleSearchPokemon}
                placeholder={'Search by name'}
                disabled={activePage > 0 ? true : false}
              />
            </form>
          </div>
          <div className="mt-5 flex h-fit w-full flex-wrap justify-center">
            {filteredByPageCollection
              ? filteredByPageCollection[activePage].map((ownedCards) => (
                  <CollectedCardContent
                    key={ownedCards.card_id}
                    {...ownedCards}
                  />
                ))
              : cards.map((card) => (
                  <CollectedCardContent key={card.id} {...card} />
                ))}
          </div>
        </div>
      </div>
      {/* <button onClick={show}>ini poke</button> */}
    </div>
  ) : (
    <div className="collections-content">
      <div className="all-cards__container">
        <div className="collections-title">
          <p className="text-center text-2xl">Pokécard Collections</p>
          <CollectionPageButton
            array={filteredByPageCollection}
            activePage={activePage}
            nextActivePage={nextActivePage}
            previousActivePage={previousActivePage}
            jumpActivePage={jumpActivePage}
          />
          <div className="mt-2 flex justify-center">
            <form>
              <input
                type="text"
                className="rounded-full p-1 indent-2"
                value={searchPokemon}
                onChange={handleSearchPokemon}
              />
            </form>
          </div>
        </div>
      </div>
      {/* <button onClick={show}>ini poke</button> */}
    </div>
  );
};

export default CollectedCardsContainer;
