import React from 'react';
import SmallPokeball from './Pokemon Components/SmallPokeball';

const Footer = () => {
  return (
    <div className="footer-container flex items-center justify-center">
      <SmallPokeball />
      <p className="mr-2 ml-2 max-md:text-xs">
        It's free to play & Will continue to be developed! Enjoy!
      </p>
      <SmallPokeball />
    </div>
  );
};

export default Footer;
