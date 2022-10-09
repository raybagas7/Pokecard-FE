import React from 'react';
import SmallCoin from './SmallCoin';
import SmallMasterball from './SmallMasterball';
import SmallPokeball from './SmallPokeball';
import SmallUltraBall from './SmallUltraBall';

const PokePouch = () => {
  return (
    <div className="poke-pouch">
      <div className="poke-balls">
        <SmallPokeball />
        <p>NaN</p>
      </div>
      <div className="master-balls">
        <SmallUltraBall />
        <p>NaN</p>
      </div>
      <div className="master-balls">
        <SmallMasterball />
        <p>NaN</p>
      </div>
      <div className="poke-coins">
        <SmallCoin />
        <p>NaN</p>
      </div>
    </div>
  );
};

export default PokePouch;
