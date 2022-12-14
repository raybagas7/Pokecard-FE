import React from 'react';
const MasterBallCard = (props) => {
  return (
    <div className="flex-row card-content" onClick={props.change}>
      <div className="choose-upper">
        <div className="poke-choose_upper-master">
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

export default MasterBallCard;
