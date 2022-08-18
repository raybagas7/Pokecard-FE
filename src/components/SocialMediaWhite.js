import React from 'react';

const SocialMediaWhite = ({ whitemed }) => {
  return (
    <>
      {whitemed.map((white) => (
        <a target="_blank" rel="noopener noreferrer" href={white.href}>
          <img
            src={white.imageUrl}
            className="image-hover__github"
            alt={white.alt}
          />
        </a>
      ))}
    </>
  );
};

export default SocialMediaWhite;
