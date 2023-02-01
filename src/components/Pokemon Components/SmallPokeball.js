import React from 'react';

const SmallPokeball = () => {
  return (
    <div className="small-pokeball hover:animate-spin">
      <div className="small-pokeball-upper">
        <div className="xsmall-line-upper"></div>
        <div className="xsmall-upper-ball animate-horizontal_shake max-md:animate-none"></div>
        <div className="xsmall-upper-ball__xsmall animate-horizontal_shake max-md:animate-none"></div>
      </div>
      <div className="small-pokeball-bottom">
        <div className="xsmall-line-bottom"></div>
        <div className="xsmall-bottom-ball animate-horizontal_shake max-md:animate-none"></div>
        <div className="xsmall-bottom-ball__xsmall animate-horizontal_shake max-md:animate-none"></div>
      </div>
    </div>
  );
};

export default SmallPokeball;
