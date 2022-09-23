import React from 'react';
import SmallCoin from './SmallCoin';
import SmallMasterball from './SmallMasterball';
import SmallPokeball from './SmallPokeball';

const PokePouch = () => {
  return (
    <div className="poke-pouch">
      <div className="poke-balls">
        <SmallPokeball />
        <p>PokéBall: 0</p>
      </div>
      <div className="poke-coins">
        <SmallCoin />
        <p>Coin: 0</p>
      </div>
      <div className="master-balls">
        <SmallMasterball />
        <p>MasterBall: 0</p>
      </div>
    </div>
  );
};

export default PokePouch;
