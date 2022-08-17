import React from 'react';
import { useState } from 'react';

const WhiteGithubIcon = () => {
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
      {' '}
      {isHovering ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/raybagas7"
        >
          <img
            src="/images/github.png"
            className="image-hover__github"
            alt="github"
          />
        </a>
      ) : (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/raybagas7"
        >
          <img
            src="/images/githubwhite.png"
            className="image-hover__github"
            alt="github"
          />
        </a>
      )}
    </div>
  );
};

export default WhiteGithubIcon;
