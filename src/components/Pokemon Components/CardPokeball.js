import React from 'react';

const CardPokeball = ({ change, attribute }) => {
  return attribute === 'normal' ? (
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
  ) : (
    <div className="flex-row card-content" onClick={change}>
      <div className="choose-upper">
        <div className="poke-choose_upper-shiny">
          <div className="master-ball__left" />
          <div className="master-ball__right" />
          <p className="master-ball__sign">M</p>
          <div className="line-upper"></div>
          <div className="upper-ball"></div>
          <div className="upper-ball__small"></div>
        </div>
      </div>
      <div className="choose-bottom">
        <div className="poke-choose_bottom">
          <div className="line-bottom" />
          <div className="bottom-ball" />
          <div className="bottom-ball__small" />
        </div>
      </div>
    </div>
  );
};

export default CardPokeball;
