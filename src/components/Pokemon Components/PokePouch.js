import React from 'react';
import SmallCoin from './SmallCoin';
import SmallMasterball from './SmallMasterball';
import SmallPokeball from './SmallPokeball';

const PokePouch = () => {
  return (
    <div className="poke-pouch">
      <div className="poke-balls">
        <SmallPokeball />
        <p>PokeBall: NaN</p>
      </div>
      <div className="poke-coins">
        <SmallCoin />
        <p>Coin: NaN</p>
      </div>
      <div className="master-balls">
        <SmallMasterball />
        <p>MasterBall: NaN</p>
      </div>
    </div>
  );
};

export default PokePouch;
