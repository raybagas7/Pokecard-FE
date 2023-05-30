import React from 'react';
import SmallCoin from './SmallCoin';
import SmallMasterball from './SmallMasterball';
import SmallPokeball from './SmallPokeball';
import SmallUltraBall from './SmallUltraBall';
import PropTypes from 'prop-types';
import DailyGiftSVG from '../DailyGiftSVG';

const PokePouch = ({
  credit,
  openCredit,
  pickedBall,
  claimDaily,
  dailyGift,
  isValid,
}) => {
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
        <p>
          {`${credit.poke_ball} `}
          {pickedBall.pokeball_amount === 0
            ? ''
            : `(${pickedBall.pokeball_amount})`}
        </p>
      </div>
      <div className="master-balls">
        <SmallUltraBall />
        <p>
          {`${credit.ultra_ball} `}
          {pickedBall.ultraball_amount === 0
            ? ''
            : `(${pickedBall.ultraball_amount})`}
        </p>
      </div>
      <div className="master-balls">
        <SmallMasterball />
        <p>
          {`${credit.master_ball} `}
          {pickedBall.masterball_amount === 0
            ? ''
            : `(${pickedBall.masterball_amount})`}
        </p>
      </div>
      <div className="poke-coins">
        <SmallCoin />
        <p>{`${credit.coin}`}</p>
      </div>
      {dailyGift && isValid ? (
        <div className="mt-1.5" onClick={claimDaily}>
          <DailyGiftSVG />
        </div>
      ) : null}
    </div>
  );
};

PokePouch.propTypes = {
  credit: PropTypes.object,
  openCredit: PropTypes.func.isRequired,
  pickedBall: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  claimDaily: PropTypes.func.isRequired,
  dailyGift: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default PokePouch;
