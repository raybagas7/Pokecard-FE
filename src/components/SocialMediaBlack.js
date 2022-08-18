import React from 'react';

const SocialMediaBlack = ({ blackmed }) => {
  return (
    <>
      {blackmed.map((black) => (
        <a target="_blank" rel="noopener noreferrer" href={black.href}>
          <img
            src={black.imageUrl}
            className="image-hover__black"
            alt={black.alt}
          />
        </a>
      ))}
    </>
  );
};

export default SocialMediaBlack;
