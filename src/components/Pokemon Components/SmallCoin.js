import React from 'react';
import { FaCoins } from 'react-icons/fa';

const SmallCoin = () => {
  return (
    <div className="small-coin flex items-center justify-center hover:animate-horizontal_shake">
      <FaCoins />
    </div>
  );
};

export default SmallCoin;
