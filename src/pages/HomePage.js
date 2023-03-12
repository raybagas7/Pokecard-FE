import React from 'react';
import PropTypes from 'prop-types';
import JumboTron from '../components/JumboTron';
import CollectedCardsContainer from '../components/Pokemon Collected Card/CollectedCardsContainer';
import MainContent from '../components/Pokemon Components/MainContent';
import Swal from 'sweetalert2';
import { getCard } from '../utils/card';
import {
  addFirstTimeCreditWithRefresh,
  claimUserDailyGiftRefresh,
  getCreditUserWithRefresh,
  getOwnerCardsRefresh,
  pickPokeCardsWithRefresh,
  putCreditId,
  // reduceBalls,
  shuffleWithCoinRefresh,
} from '../utils/network-data';
import { getSocmedBlack, getSocmedWhite } from '../utils/socmed';
const moment = require('moment-timezone');

const HomePage = ({ nextDaily, isValid, dailyGiftCheck }) => {
  const waktuIndoNow = moment().tz('Asia/Jakarta').format('YYYY-MM-DD');
  const userNextDaily = moment(nextDaily).format('YYYY-MM-DD');
  const ableToClaim = moment(userNextDaily).isSameOrBefore(waktuIndoNow, 'day');

  const [creditAvailability, setCreditAvailability] = React.useState(null);
  const [dailyGift, setDailyGift] = React.useState(ableToClaim);
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

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const openCreditBundle = async () => {
    try {
      await addFirstTimeCreditWithRefresh().then(({ error, data, message }) => {
        setCreditId(data);
      });
    } catch (e) {
      // console.log(e);
    }
  };

  const ownedBall = {
    pokeBall,
    ultraBall,
    masterBall,
  };

  const claimDaily = async () => {
    try {
      await claimUserDailyGiftRefresh().then(({ error, data, message }) => {
        if (error) {
          Toast.fire({
            icon: 'error',
            title: `${message}`,
          });
        }
        setCreditAvailability({
          credit_id: creditAvailability.credit_id,
          poke_ball: data.creditAmount.poke_ball,
          ultra_ball: data.creditAmount.ultra_ball,
          master_ball: data.creditAmount.master_ball,
          coin: data.creditAmount.coin,
        });
        setPokeBall(data.creditAmount.poke_ball);
        setUltraBall(data.creditAmount.ultra_ball);
        setMasterBall(data.creditAmount.master_ball);
        setCoins(data.creditAmount.coin);
        Toast.fire({
          icon: 'success',
          title: `Daily Gift! You recieve PokeBall (3), UltraBall(1), MasterBall(1), and Coin(1000)`,
        });
        setDailyGift(!dailyGift);
        dailyGiftCheck(!dailyGift);
      });
    } catch (e) {
      // console.log(e);
    }
  };

  const pickCards = async (pickPayload, cardsPayload) => {
    try {
      await pickPokeCardsWithRefresh(pickPayload, cardsPayload).then(
        ({ error = false, data = {}, message = '' }) => {
          // console.log('home pickcard', error, data, message);
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
          setOwnedCards(
            ownedCards.cards
              ? { cards: [...ownedCards.cards, ...cardsPayload] }
              : { cards: [...cardsPayload] }
          );
        }
      );
    } catch (e) {
      // console.log(e);
    }
  };

  const shuffleCard = async () => {
    try {
      await shuffleWithCoinRefresh().then(({ error, data, message }) => {
        // console.log('home shuffle', error, data, message);

        setCoins(data);
        setCreditAvailability({
          credit_id: creditAvailability.credit_id,
          poke_ball: creditAvailability.poke_ball,
          ultra_ball: creditAvailability.ultra_ball,
          master_ball: creditAvailability.master_ball,
          coin: data,
        });
      });
    } catch (e) {
      // console.log(e);
    }
  };

  React.useEffect(() => {
    setSocmedBlack(getSocmedBlack());
    setSocmedWhite(getSocmedWhite());
    setCards(getCard());
    getCreditUserWithRefresh().then(({ error, data, message }) => {
      try {
        setCreditAvailability(data);
        putCreditId(data.credit_id);
        setCoins(data.coin);
        setPokeBall(data.poke_ball);
        setUltraBall(data.ultra_ball);
        setMasterBall(data.master_ball);
        setInitializing2(false);
        // console.log('setCreditAvailability', data);
      } catch (e) {
        setInitializing2(false);
        // console.log(e);
      }
    });
  }, [creditId]);

  React.useEffect(() => {
    getOwnerCardsRefresh().then(({ error, data, message }) => {
      // console.log('home ownedcard', error, data, message);
      try {
        setOwnedCards(data);
        setInitializing(false);
        // console.log('get ownerdcards', data);
      } catch (e) {
        // console.log(e);
      }
    });
  }, []);
  //pokeBall, ultraBall, masterBall
  if (initializing || initializing2) {
    return (
      <section className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <span className="absolute top-0 right-0 -mt-16 -mr-14 flex h-32 w-32">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex h-32 w-32 rounded-full bg-yellow-500"></span>
            </span>
          </span>
        </div>
      </section>
    );
  }
  // console.log('CA', creditAvailability);
  return (
    <section>
      <JumboTron blackmed={socmedBlack} whitemed={socmedWhite} />
      <MainContent
        cards={cards}
        credit={creditAvailability}
        openCredit={openCreditBundle}
        shuffleCard={shuffleCard}
        pickCards={pickCards}
        ownedBall={ownedBall}
        coins={coins}
        claimDaily={claimDaily}
        dailyGift={dailyGift}
        isValid={isValid}
        // reducePokeBalls={reducePokeBalls}
      />
      <CollectedCardsContainer ownedCards={ownedCards} doFlip={false} />
    </section>
  );
};

export default HomePage;

HomePage.propTypes = {
  nextDaily: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  dailyGiftCheck: PropTypes.func.isRequired,
};
