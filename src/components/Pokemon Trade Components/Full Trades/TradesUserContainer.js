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
        console.log(message);
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

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="rounded-2xl bg-gold-poke p-10">
        <div className="rounded-2xl bg-white/50 p-5 drop-shadow-lg">
          <TradeCards userTrades={userTrades} />
        </div>
      </div>
    </div>
  );
};

export default TradesUserContainer;
