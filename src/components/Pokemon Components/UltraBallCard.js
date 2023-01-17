import React from 'react';
import PropTypes from 'prop-types';

const UltraBallCard = (props) => {
  return (
    <div className="flex-row-card card-content" onClick={props.change}>
      <div className="choose-upper">
        <div className="poke-choose_upper-shiny">
          <div className="ultra-ball__right" />
          <div className="ultra-ball__left" />
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

UltraBallCard.propTypes = {
  change: PropTypes.func.isRequired,
};

export default UltraBallCard;
