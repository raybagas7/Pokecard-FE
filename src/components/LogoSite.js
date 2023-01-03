import React from 'react';
import { Link } from 'react-router-dom';
import LogoCardSVG from './LogoCardSVG';
import SmallCircleSVG from './SmallCircleSVG';

const LogoSite = () => {
  return (
    <div className="agas-logo flex items-center">
      <div className="flex-1  ">
        <Link to={'/'}>
          <h1 className="text-3xl font-bold">Pokécard</h1>
        </Link>
      </div>
      <div className="ml-2 flex flex-1 items-center justify-center">
        <div className="relative">
          <LogoCardSVG />
        </div>
        <div className="absolute">
          <SmallCircleSVG />
        </div>
      </div>
    </div>
  );
};

export default LogoSite;
