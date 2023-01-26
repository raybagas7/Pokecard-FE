import React, { useState } from 'react';
import '../../styles/collected-pokecards-style.css';
import '../../styles/page-button-style.css';
import { getCard } from '../../utils/card';
import CollectedCardContent from './CollectedCardContent';
import CollectionPageButton from './CollectionPageButton';
import useInput from '../../hooks/useInput';
import MasterBallCardSVG from '../Profile Components/MasterBallCardSVG';
import PokeBallCardSVG from '../Profile Components/PokeBallCardSVG';
import UltraBallCardSVG from '../Profile Components/UltraBallCardSVG';
import MasterShineBallCardSVG from '../Profile Components/MasterShineBallCardSVG';
import ExtraSmallCircleSVG from '../Profile Components/ExtraSmallCircleSVG';

const CollectedCardsContainer = ({ ownedCards, doFlip }) => {
  const [searchPokemon, handleSearchPokemon] = useInput('');
  const [activePage, setActivePage] = useState(0);
  const [showLMShiny, setShowLMShiny] = useState(false);
  const [showNormal, setShowNormal] = useState(false);
  const [showLMNormal, setShowLMNormal] = useState(false);
  const [showShiny, setShowShiny] = useState(false);

  const cards = getCard();
  const { cards: ownedCollections = [] } = ownedCards;
  ownedCollections.sort((a, b) => a.poke_id - b.poke_id);

  const toggleLMShiny = () => {
    const temp = showLMShiny;
    setShowLMShiny(!temp);
    setShowNormal(false);
    setShowLMNormal(false);
    setShowShiny(false);
  };

  const toggleNormal = () => {
    const temp = showNormal;
    setShowLMShiny(false);
    setShowNormal(!temp);
    setShowLMNormal(false);
    setShowShiny(false);
  };

  const toggleShiny = () => {
    const temp = showShiny;
    setShowLMShiny(false);
    setShowNormal(false);
    setShowLMNormal(false);
    setShowShiny(!temp);
  };

  const toggleLMNormal = () => {
    const temp = showLMNormal;
    setShowLMShiny(false);
    setShowNormal(false);
    setShowLMNormal(!temp);
    setShowShiny(false);
  };

  const onSearchPokemonHandler = () => {
    const foundPokemon = ownedCollections.filter((collection) =>
      showNormal
        ? collection.name.toLowerCase().includes(searchPokemon.toLowerCase()) &&
          collection.legendary === false &&
          collection.mythical === false &&
          collection.attribute === 'normal'
        : showShiny
        ? collection.name.toLowerCase().includes(searchPokemon.toLowerCase()) &&
          collection.legendary === false &&
          collection.mythical === false &&
          collection.attribute === 'shiny'
        : showLMNormal
        ? collection.name.toLowerCase().includes(searchPokemon.toLowerCase()) &&
          (collection.legendary === true || collection.mythical === true) &&
          collection.attribute === 'normal'
        : showLMShiny
        ? collection.name.toLowerCase().includes(searchPokemon.toLowerCase()) &&
          (collection.legendary === true || collection.mythical === true) &&
          collection.attribute === 'shiny'
        : collection.name.toLowerCase().includes(searchPokemon.toLowerCase())
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
          <div className="mt-2 flex flex-col items-center justify-center gap-2">
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
            <div className="flex h-10 items-center gap-2">
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showNormal ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleNormal}
              >
                <PokeBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showShiny ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleShiny}
              >
                <UltraBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showLMNormal ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleLMNormal}
              >
                <MasterBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showLMShiny ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleLMShiny}
              >
                <MasterShineBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex h-fit w-full flex-wrap justify-center">
            {filteredByPageCollection
              ? filteredByPageCollection[activePage].map((ownedCards) => (
                  <CollectedCardContent
                    key={
                      ownedCards.card_id
                        ? ownedCards.card_id
                        : `card-${ownedCards.id}`
                    }
                    doFlip={doFlip}
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
          <div className="mt-2 flex flex-col items-center justify-center gap-2">
            <form>
              <input
                type="text"
                className="rounded-full p-2 indent-2 text-sm"
                value={searchPokemon}
                onChange={handleSearchPokemon}
              />
            </form>
            <div className="flex h-10 items-center gap-2">
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showNormal ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleNormal}
              >
                <PokeBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showShiny ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleShiny}
              >
                <UltraBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showLMNormal ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleLMNormal}
              >
                <MasterBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center ${
                  showLMShiny ? 'animate-pulse border-2 border-white' : null
                }`}
                onClick={toggleLMShiny}
              >
                <MasterShineBallCardSVG />
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={show}>ini poke</button> */}
    </div>
  );
};

export default CollectedCardsContainer;
