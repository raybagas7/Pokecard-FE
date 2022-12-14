import React from 'react';
const PokeBallCard = (props) => {
  return (
    <div className="flex-row card-content" onClick={props.change}>
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

export default PokeBallCard;
