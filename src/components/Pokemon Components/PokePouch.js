import React from 'react';
import SmallCoin from './SmallCoin';
import SmallMasterball from './SmallMasterball';
import SmallPokeball from './SmallPokeball';
import SmallUltraBall from './SmallUltraBall';

const PokePouch = ({ credit, openCredit, pickedBall }) => {
  // console.log('credit di pouch', credit);
  return credit === null ? (
    <div className="poke-pouch">
      <button className="open-credit" onClick={openCredit}>
        Open My Credit Bundle
      </button>
    </div>
  ) : (
    <div className="poke-pouch">
      <div className="poke-balls">
        <SmallPokeball />
        <p>{`${credit.poke_ball - pickedBall.pokeBall}`}</p>
      </div>
      <div className="master-balls">
        <SmallUltraBall />
        <p>{`${credit.ultra_ball - pickedBall.ultraBall}`}</p>
      </div>
      <div className="master-balls">
        <SmallMasterball />
        <p>{`${credit.master_ball - pickedBall.masterBall}`}</p>
      </div>
      <div className="poke-coins">
        <SmallCoin />
        <p>{`${credit.coin}`}</p>
      </div>
    </div>
  );
};

export default PokePouch;
