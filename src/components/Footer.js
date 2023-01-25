import React from 'react';
import SmallPokeball from './Pokemon Components/SmallPokeball';

const Footer = () => {
  return (
    <div className="footer-container flex items-center justify-center">
      <SmallPokeball />
      <p className="mr-1 ml-1 max-md:text-xxs">
        It's free to play & will continue to be developed for fun.
      </p>
      <SmallPokeball />
    </div>
  );
};

export default Footer;
