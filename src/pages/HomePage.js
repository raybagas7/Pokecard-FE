import React from 'react';
import JumboTron from '../components/JumboTron';
import CollectedCardsContainer from '../components/Pokemon Collected Card/CollectedCardsContainer';
import MainContent from '../components/Pokemon Components/MainContent';
import { getCard } from '../utils/card';
import {
  addFirstTimeCredit,
  getCreditUser,
  putCreditId,
  shuffleWithCoin,
} from '../utils/network-data';
import { getSocmedBlack, getSocmedWhite } from '../utils/socmed';

const HomePage = () => {
  const [creditAvailability, setCreditAvailability] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [socmedBlack, setSocmedBlack] = React.useState([]);
  const [socmedWhite, setSocmedWhite] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [creditId, setCreditId] = React.useState(null);
  const [coins, setCoins] = React.useState(null);

  const openCreditBundle = async () => {
    await addFirstTimeCredit().then((data) => {
      setCreditId(data);
    });
  };

  const shuffleCard = async () => {
    await shuffleWithCoin().then((data) => {
      setCoins(data);
    });
  };

  React.useEffect(() => {
    setSocmedBlack(getSocmedBlack());
    setSocmedWhite(getSocmedWhite());
    setCards(getCard());
    getCreditUser().then(({ error, data }) => {
      if (error) {
        setInitializing(false);
      } else {
        setCreditAvailability(data);
        putCreditId(data.credit_id);
        setCoins(data.coin);
        setInitializing(false);
      }
    });
  }, [creditId, coins]);

  if (initializing) {
    return null;
  }

  return (
    <>
      <JumboTron blackmed={socmedBlack} whitemed={socmedWhite} />
      <MainContent
        cards={cards}
        credit={creditAvailability}
        openCredit={openCreditBundle}
        shuffleCard={shuffleCard}
      />
      <CollectedCardsContainer />
    </>
  );
};

export default HomePage;
