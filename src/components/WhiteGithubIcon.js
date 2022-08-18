import React from 'react';
import { useState } from 'react';
import SocialMediaBlack from './SocialMediaBlack';
import SocialMediaWhite from './SocialMediaWhite';

const WhiteGithubIcon = ({ blackmed, whitemed }) => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseOverHandler = () => {
    setIsHovering(true);
  };

  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="white-github"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      {/*Still figuring out how to separate this social media into component */}
      {isHovering ? (
        <SocialMediaBlack blackmed={blackmed} />
      ) : (
        <SocialMediaWhite whitemed={whitemed} />
      )}
    </div>
  );
};

export default WhiteGithubIcon;
