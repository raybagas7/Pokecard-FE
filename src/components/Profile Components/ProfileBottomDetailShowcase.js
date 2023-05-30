import React from 'react';
import ProfileTradeCard from './Trades Components/ProfileTradeCard';

const ProfileBottomDetailShowcase = ({ userTrades }) => {
  const { trades } = userTrades;
  const firstBoxTrades = trades.slice(0, 3);
  const secondBoxTrades = trades.slice(3, 6);
  return (
    <div className="flex flex-1 flex-wrap items-center justify-center rounded-lg">
      <div className="flex max-sm:flex-1 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
        {firstBoxTrades.map((trade) => (
          <ProfileTradeCard key={`trade-${trade.window_number}`} {...trade} />
        ))}
      </div>
      <div className="flex max-sm:flex-1 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
        {secondBoxTrades.map((trade) => (
          <ProfileTradeCard key={`trade-${trade.window_number}`} {...trade} />
        ))}
      </div>
    </div>
  );
};

export default ProfileBottomDetailShowcase;
