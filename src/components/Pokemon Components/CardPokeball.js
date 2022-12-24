import React from 'react';
import MasterBallCard from './MasterBallCard';
import PokeBallCard from './PokeBallCard';
import UltraBallCard from './UltraBallCard';
import PropTypes from 'prop-types';

const CardPokeball = ({ change, isShiny, isLegendary }) => {
  return isLegendary === true ? (
    <MasterBallCard change={change} />
  ) : isShiny === true && isLegendary === false ? (
    <UltraBallCard change={change} />
  ) : isShiny === false && isLegendary === false ? (
    <PokeBallCard change={change} />
  ) : (
    <div className="flex-row card-content" onClick={change}>
      <div className="choose-upper">
        <div className="poke-choose_upper">
          <div className="line-upper"></div>
          <div className="upper-ball"></div>
          <div className="upper-ball__small"></div>
        </div>
      </div>
      <div className="choose-bottom">
        <div className="poke-choose_bottom">
          <div className="line-bottom"></div>
          <div className="bottom-ball"></div>
          <div className="bottom-ball__small"></div>
        </div>
      </div>
    </div>
  );
};

CardPokeball.propTypes = {
  change: PropTypes.func.isRequired,
  isShiny: PropTypes.bool.isRequired,
  isLegendary: PropTypes.bool.isRequired,
};

export default CardPokeball;
