import React from 'react';
import { Link } from 'react-router-dom';

const LogoSite = () => {
  return (
    <div className="agas-logo">
      <Link to={'/'}>
        <h1 className="text-3xl font-bold ">Pokécard</h1>
      </Link>
    </div>
  );
};

export default LogoSite;
