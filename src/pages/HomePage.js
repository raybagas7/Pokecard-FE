import React from 'react';
import JumboTron from '../components/JumboTron';
import CollectedCardsContainer from '../components/Pokemon Collected Card/CollectedCardsContainer';
import MainContent from '../components/Pokemon Components/MainContent';
import { getCard } from '../utils/card';
import { getElement } from '../utils/element';
import { getSocmedBlack, getSocmedWhite } from '../utils/socmed';

const HomePage = () => {
  const [socmedBlack, setSocmedBlack] = React.useState([]);
  const [socmedWhite, setSocmedWhite] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [elements, setElements] = React.useState([]);

  React.useEffect(() => {
    setSocmedBlack(getSocmedBlack());
    setSocmedWhite(getSocmedWhite());
    setCards(getCard());
    setElements(getElement());
  }, []);
  return (
    <>
      <JumboTron blackmed={socmedBlack} whitemed={socmedWhite} />
      <MainContent cards={cards} elements={elements} />
      <CollectedCardsContainer />
    </>
  );
};

export default HomePage;
