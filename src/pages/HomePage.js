import React from 'react';
import JumboTron from '../components/JumboTron';
import CollectedCardsContainer from '../components/Pokemon Collected Card/CollectedCardsContainer';
import MainContent from '../components/Pokemon Components/MainContent';
import { getCard } from '../utils/card';
import {
  addFirstTimeCredit,
  getCreditUser,
  getOwnerCards,
  pickPokeCards,
  putAccessToken,
  putCreditId,
  // reduceBalls,
  refreshAccessToken,
  shuffleWithCoin,
} from '../utils/network-data';
import { getSocmedBlack, getSocmedWhite } from '../utils/socmed';

const HomePage = () => {
  const [creditAvailability, setCreditAvailability] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [initializing2, setInitializing2] = React.useState(true);
  const [socmedBlack, setSocmedBlack] = React.useState([]);
  const [socmedWhite, setSocmedWhite] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [creditId, setCreditId] = React.useState(null);
  const [coins, setCoins] = React.useState(null);
  const [pokeBall, setPokeBall] = React.useState(0);
  const [ultraBall, setUltraBall] = React.useState(0);
  const [masterBall, setMasterBall] = React.useState(0);
  const [ownedCards, setOwnedCards] = React.useState([]);
  const openCreditBundle = async () => {
    await addFirstTimeCredit().then(({ data }) => {
      setCreditId(data);
      // console.log(data);
    });
  };

  const ownedBall = {
    pokeBall,
    ultraBall,
    masterBall,
  };

  const pickCards = async (pickPayload) => {
    await pickPokeCards(pickPayload).then(({ error, data, message }) => {
      let cond = false;
      message === 'Token maximum age exceeded' ? (cond = true) : (cond = false);
      if (error && cond) {
        refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          await pickPokeCards(pickPayload).then(({ data }) => {
            // console.log('inipickload', data);
            setPokeBall(data.balls.poke_ball);
            setUltraBall(data.balls.ultra_ball);
            setMasterBall(data.balls.master_ball);
            setCreditAvailability({
              credit_id: creditAvailability.credit_id,
              poke_ball: data.balls.poke_ball,
              ultra_ball: data.balls.ultra_ball,
              master_ball: data.balls.master_ball,
              coin: creditAvailability.coin,
            });
          });
        });
      } else {
        // console.log('inipickload', data);
        setPokeBall(data.balls.poke_ball);
        setUltraBall(data.balls.ultra_ball);
        setMasterBall(data.balls.master_ball);
        setCreditAvailability({
          credit_id: creditAvailability.credit_id,
          poke_ball: data.balls.poke_ball,
          ultra_ball: data.balls.ultra_ball,
          master_ball: data.balls.master_ball,
          coin: creditAvailability.coin,
        });
      }
    });
  };

  // const reducePokeBalls = async (ballsAmount) => {
  //   await reduceBalls(ballsAmount).then(({ error, data, message }) => {
  //     let cond = false;
  //     message === 'Token maximum age exceeded' ? (cond = true) : (cond = false);

  //     if (error && cond) {
  //       refreshAccessToken().then(({ data }) => {
  //         putAccessToken(data.accessToken);
  //         reduceBalls(ballsAmount).then(({ data }) => {
  //           setPokeBall(data.pokeBall[0].poke_ball);
  //           setUltraBall(data.pokeBall[0].ultra_ball);
  //           setMasterBall(data.pokeBall[0].master_ball);
  //         });
  //       });
  //     } else {
  //       setPokeBall(data.pokeBall[0].poke_ball);
  //       setUltraBall(data.pokeBall[0].ultra_ball);
  //       setMasterBall(data.pokeBall[0].master_ball);
  //     }
  //   });
  // };

  const shuffleCard = async () => {
    await shuffleWithCoin().then(({ error, data, message }) => {
      let cond = false;
      message === 'Token maximum age exceeded' ? (cond = true) : (cond = false);
      if (error && cond) {
        refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          await shuffleWithCoin().then(({ data }) => {
            setCoins(data);
            setCreditAvailability({
              credit_id: creditAvailability.credit_id,
              poke_ball: creditAvailability.poke_ball,
              ultra_ball: creditAvailability.ultra_ball,
              master_ball: creditAvailability.master_ball,
              coin: data,
            });
          });
        });
      } else {
        setCoins(data);
        setCreditAvailability({
          credit_id: creditAvailability.credit_id,
          poke_ball: creditAvailability.poke_ball,
          ultra_ball: creditAvailability.ultra_ball,
          master_ball: creditAvailability.master_ball,
          coin: data,
        });
      }
    });
  };

  // Owned Cards
  React.useEffect(() => {
    getOwnerCards().then(({ error, data, message }) => {
      let cond = false;
      message === 'Token maximum age exceeded' ? (cond = true) : (cond = false);
      if (error && cond) {
        refreshAccessToken().then(({ data }) => {
          putAccessToken(data.accessToken);
          getOwnerCards().then(({ data }) => {
            setOwnedCards(data);
            setInitializing(false);
            console.log('after refresh get ownerdcards, ', data);
            // console.log(data);
          });
        });
      } else {
        setOwnedCards(data);
        setInitializing(false);
        console.log('get ownerdcards', data);
      }
    });
  }, [pokeBall, ultraBall, masterBall]);

  React.useEffect(() => {
    setSocmedBlack(getSocmedBlack());
    setSocmedWhite(getSocmedWhite());
    setCards(getCard());
    getCreditUser().then(({ error, data, message }) => {
      let cond = false;
      message === 'Token maximum age exceeded' ? (cond = true) : (cond = false);
      if (error && cond) {
        refreshAccessToken().then(({ data }) => {
          putAccessToken(data.accessToken);
          getCreditUser().then(({ data }) => {
            setCreditAvailability(data);
            putCreditId(data.credit_id);
            setCoins(data.coin);
            setPokeBall(data.poke_ball);
            setUltraBall(data.ultra_ball);
            setMasterBall(data.master_ball);
            setInitializing2(false);
            console.log('setCreditAvailability Refreshed Token', data);
          });
        });
      } else {
        setCreditAvailability(data);
        putCreditId(data.credit_id);
        setCoins(data.coin);
        setPokeBall(data.poke_ball);
        setUltraBall(data.ultra_ball);
        setMasterBall(data.master_ball);
        setInitializing2(false);
        console.log('setCreditAvailability', data);
      }
    });
  }, [creditId]);

  if (initializing && initializing2) {
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
        pickCards={pickCards}
        ownedBall={ownedBall}
        coins={coins}
        // reducePokeBalls={reducePokeBalls}
      />
      <CollectedCardsContainer ownedCards={ownedCards} />
    </>
  );
};

export default HomePage;
