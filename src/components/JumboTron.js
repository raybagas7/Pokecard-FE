import React from 'react';
import { useState } from 'react';
import WhiteGithubIcon from './WhiteGithubIcon';
import PropTypes from 'prop-types';

const JumboTron = ({ blackmed, whitemed }) => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseOverHandler = () => {
    setIsHovering(true);
  };

  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="jumbotron"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div className="jumbotron-over"></div>
      {isHovering ? (
        <WhiteGithubIcon blackmed={blackmed} whitemed={whitemed} />
      ) : (
        ''
      )}
    </div>
  );
};

JumboTron.propTypes = {
  blackmed: PropTypes.arrayOf(PropTypes.object).isRequired,
  whitemed: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default JumboTron;
