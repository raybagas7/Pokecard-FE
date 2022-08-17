import React from 'react';
import { useState } from 'react';
import WhiteGithubIcon from './WhiteGithubIcon';

const JumboTron = () => {
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
      {isHovering ? <WhiteGithubIcon /> : ''}
    </div>
  );
};

export default JumboTron;
