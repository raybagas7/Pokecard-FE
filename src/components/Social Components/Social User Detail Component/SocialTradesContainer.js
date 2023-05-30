import React, { useState } from 'react';
import SocialTradeCard from './SocialTradeCard';
import { AiFillCloseCircle } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { GiCardExchange } from 'react-icons/gi';
import SocialOfferCard from './SocialOfferCard';
import CollectionPageButton from '../../Pokemon Collected Card/CollectionPageButton';
import useInput from '../../../hooks/useInput';
import { postOfferToTradeCardRefresh } from '../../../utils/network-data';
import useDebounce from '../../../hooks/useDebounce';
import PokeBallCardSVG from '../../Profile Components/PokeBallCardSVG';
import ExtraSmallCircleSVG from '../../Profile Components/ExtraSmallCircleSVG';
import UltraBallCardSVG from '../../Profile Components/UltraBallCardSVG';
import MasterBallCardSVG from '../../Profile Components/MasterBallCardSVG';
import MasterShineBallCardSVG from '../../Profile Components/MasterShineBallCardSVG';

const SocialTradesContainer = ({ tradeCards, ownedCards, userTrainerName }) => {
  const [searchPokemon, handleSearchPokemon] = useInput('');
  const [offerTradeCards, setOfferTradeCards] = useState({
    offerer_card_id: '',
    trader_card_id: '',
  });
  const [chosenTradeCard, setChosenTradeCard] = useState();
  const [chosenOfferCard, setChosenOfferCard] = useState();
  const [activeOfferPage, setOfferActivePage] = useState(0);
  const [showLMShiny, setShowLMShiny] = useState(false);
  const [showNormal, setShowNormal] = useState(false);
  const [showLMNormal, setShowLMNormal] = useState(false);
  const [showShiny, setShowShiny] = useState(false);
  const [Choosed, setChoosed] = useState(false);
  const firstBoxTrades = tradeCards.slice(0, 3);
  const secondBoxTrades = tradeCards.slice(3, 6);

  const toggleLMShiny = () => {
    const temp = showLMShiny;
    setShowLMShiny(!temp);
    setShowNormal(false);
    setShowLMNormal(false);
    setShowShiny(false);
    setOfferActivePage(0);
  };

  const toggleNormal = () => {
    const temp = showNormal;
    setShowLMShiny(false);
    setShowNormal(!temp);
    setShowLMNormal(false);
    setShowShiny(false);
    setOfferActivePage(0);
  };

  const toggleShiny = () => {
    const temp = showShiny;
    setShowLMShiny(false);
    setShowNormal(false);
    setShowLMNormal(false);
    setShowShiny(!temp);
    setOfferActivePage(0);
  };

  const toggleLMNormal = () => {
    const temp = showLMNormal;
    setShowLMShiny(false);
    setShowNormal(false);
    setShowLMNormal(!temp);
    setShowShiny(false);
    setOfferActivePage(0);
  };

  const addAnOfferToTradeCard = async (payload) => {
    const result = await postOfferToTradeCardRefresh(payload).then(
      ({ error, data, message }) => {
        return { error, message };
      }
    );
    return result;
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const showAlert = () => {
    Swal.fire({
      title: `Confirmation, offer your card for this trade card?`,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        popup: 'verification-swal',
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await addAnOfferToTradeCard(offerTradeCards);
        if (!result.error) {
          Toast.fire({
            icon: 'success',
            title: `${result.message}`,
          });
        } else {
          Toast.fire({
            icon: 'error',
            title: `${result.message}`,
          });
        }
      } else if (result.isDenied) {
      }
    });
  };

  // Arrange Offerer Cards
  const { cards: offererOwnedCards = [] } = ownedCards;
  offererOwnedCards.sort((a, b) => a.poke_id - b.poke_id);

  const onSearchPokemonHandler = () => {
    const foundPokemon = offererOwnedCards.filter((collection) =>
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

  const debounceValue = useDebounce(onSearchPokemonHandler());

  const filteredByPageCollection = [];
  const devideOwnedPokemon = Math.ceil(onSearchPokemonHandler().length / 24);

  for (let i = 0; i < devideOwnedPokemon; i++) {
    const min2 = (i + 1) * 24 - 24;
    const max2 = (i + 1) * 24;
    filteredByPageCollection.push(debounceValue.slice(min2, max2));
  }

  const nextActivePage = () => {
    setOfferActivePage((prevPage) => {
      const newPage = prevPage + 1;
      return newPage;
    });
  };

  const previousActivePage = () => {
    setOfferActivePage((prevPage) => {
      const newPage = prevPage - 1;
      return newPage;
    });
  };

  const jumpActivePage = (number) => {
    setOfferActivePage(number);
  };

  const change = () => {
    const temp = !Choosed;
    setChoosed(temp);
  };

  const closeOffer = () => {
    const temp = !Choosed;
    setChoosed(temp);
    setChosenTradeCard(null);
    setChosenOfferCard(null);
    setOfferTradeCards({
      offerer_card_id: '',
      trader_card_id: '',
    });
  };

  const pickTradeCard = (card) => {
    setChosenTradeCard(card);
    setOfferTradeCards({
      ...offerTradeCards,
      trader_card_id: card.card_id,
    });
  };

  const pickOfferCard = (card) => {
    setChosenOfferCard(card);
    setOfferTradeCards({
      ...offerTradeCards,
      offerer_card_id: card.card_id,
    });
  };

  return !Choosed ? (
    <>
      <div className="flex justify-center">
        <p
          className="mt-3 w-fit rounded-2xl bg-white/50 p-2 text-base text-white drop-shadow-lg
              max-md:mb-3 max-md:text-sm"
        >
          {userTrainerName}'s Trading Cards
        </p>
      </div>
      <div className="group/trade flex flex-1 flex-wrap items-center justify-center rounded-lg">
        <div className="flex max-sm:flex-1 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
          {firstBoxTrades.map((trade) => (
            <SocialTradeCard
              key={`trade-${trade.window_number}`}
              {...trade}
              change={change}
              pickTradeCard={pickTradeCard}
            />
          ))}
        </div>
        <div className="flex max-sm:flex-1 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
          {secondBoxTrades.map((trade) => (
            <SocialTradeCard
              key={`trade-${trade.window_number}`}
              {...trade}
              change={change}
              pickTradeCard={pickTradeCard}
            />
          ))}
        </div>
      </div>
    </>
  ) : (
    <div
      className="group/trade flex h-[772px] w-full animate-default_quantum flex-col rounded-lg bg-gold-poke p-4
    max-xl:h-[684px]"
    >
      <AiFillCloseCircle
        className="absolute top-0 right-0 m-2 h-10 w-10 cursor-pointer text-black-steam
        transition hover:scale-125 hover:text-red-poke
        max-sm:h-7 max-sm:w-7"
        onClick={closeOffer}
      />
      <div className="flex h-fit w-full justify-center rounded-t-lg">
        <div
          className="m-3 flex items-center rounded-lg bg-white/60 shadow-md
        max-sm:mt-12"
        >
          <SocialTradeCard
            key={`trade-${chosenTradeCard.card_id}`}
            {...chosenTradeCard}
          />
          <GiCardExchange
            onClick={chosenOfferCard ? showAlert : null}
            className={`h-16 w-16 transition duration-500 animation-delay-1000
            ${
              chosenOfferCard
                ? 'animate-spinner cursor-pointer text-black-steam hover:animate-spin_back hover:text-orange-poke max-md:animate-none max-md:hover:animate-none'
                : 'text-black-steam/30'
            }
            max-sm:h-7 max-sm:w-7`}
          />
          <SocialTradeCard
            key={chosenOfferCard ? `offer-${chosenOfferCard.card_id}` : `offer`}
            {...chosenOfferCard}
          />
        </div>
      </div>
      {onSearchPokemonHandler().length !== 0 ? (
        <div className="flex h-full w-full flex-col overflow-auto whitespace-nowrap rounded-lg bg-white/60 shadow-md">
          <CollectionPageButton
            array={filteredByPageCollection}
            activePage={activeOfferPage}
            nextActivePage={nextActivePage}
            previousActivePage={previousActivePage}
            jumpActivePage={jumpActivePage}
          />
          <div className="mt-2 flex flex-col items-center justify-center gap-2 text-black">
            <form>
              <input
                type="text"
                className="rounded-full p-1 indent-2 text-xs"
                value={searchPokemon}
                onChange={handleSearchPokemon}
                placeholder={'Search by name'}
                disabled={activeOfferPage > 0 ? true : false}
              />
            </form>
            <div className="relative flex h-10 items-center gap-2 ">
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
          <div className="flex h-full w-full flex-wrap justify-center">
            {filteredByPageCollection[activeOfferPage].map((owned) => (
              <SocialOfferCard
                key={`owned-${owned.card_id}`}
                {...owned}
                change={change}
                pickOfferCard={pickOfferCard}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col overflow-auto whitespace-nowrap rounded-lg bg-white/60">
          <CollectionPageButton
            array={filteredByPageCollection}
            activePage={activeOfferPage}
            nextActivePage={nextActivePage}
            previousActivePage={previousActivePage}
            jumpActivePage={jumpActivePage}
          />
          <div className="mt-2 flex flex-col items-center justify-center gap-2 text-black">
            <form>
              <input
                type="text"
                className="rounded-full p-1 indent-2 text-xs"
                value={searchPokemon}
                onChange={handleSearchPokemon}
                placeholder={'Search by name'}
                disabled={activeOfferPage > 0 ? true : false}
              />
            </form>
            <div className="relative flex h-10 items-center gap-2">
              <div
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
                className={`flex h-fit w-fit cursor-pointer items-center justify-center hover:animate-horizontal_shake ${
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
      )}
    </div>
  );
};

export default SocialTradesContainer;
