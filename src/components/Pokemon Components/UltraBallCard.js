import React from 'react';
const UltraBallCard = (props) => {
  return (
    <div className="flex-row card-content" onClick={props.change}>
      <div className="choose-upper">
        <div className="poke-choose_upper-shiny">
          <div className="ultra-ball__right" />
          <div className="ultra-ball__left" />
          <p className="master-ball__sign">Shiny</p>
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

export default UltraBallCard;
