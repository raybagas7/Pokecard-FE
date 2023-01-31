import React, { useState } from 'react';
import { getUserTradesRefresh } from '../../../utils/network-data';
import TradeCards from './TradeCards';

const TradesUserContainer = () => {
  const [userTrades, setUserTrades] = useState();

  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    getUserTradesRefresh().then(({ error, data, message }) => {
      try {
        setUserTrades(data);
        setInitializing(false);
      } catch (e) {
        // console.log(message);
      }
    });
  }, []);

  if (initializing) {
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

  // let setAll = (obj, val) =>
  //   Object.keys(obj).forEach((k) =>
  //     k !== 'window_number' ? (obj[k] = val) : null
  //   );
  // let setNull = (obj) => setAll(obj, null);
  // const newTrades = setNull(userTrades['trades'][0]);
  // setUserTrades(newTrades);
  //  const removeTradesCard = (windowNumber) => setNull(tradesCard[windowNumber]);1
  // console.log(userTrades['trades'][0]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div
        className="m-5 flex flex-col items-center rounded-2xl bg-gold-poke p-5 pt-3
      max-sm:p-3"
      >
        <div
          className="mb-3 w-fit rounded-2xl bg-white/50 p-2 text-2xl text-black-steam drop-shadow-lg
        max-sm:text-xl"
        >
          Your Trades
        </div>
        <div
          className="rounded-2xl bg-white/50 p-5 drop-shadow-lg
        max-sm:p-3"
        >
          <TradeCards userTrades={userTrades} />
        </div>
      </div>
    </div>
  );
};

export default TradesUserContainer;
