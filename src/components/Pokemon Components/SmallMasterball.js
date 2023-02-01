import React from 'react';

const SmallMasterball = () => {
  return (
    <div className="small-pokeball hover:animate-spin">
      <div className="small-masterball-upper">
        <div className="small-master-ball__left" />
        <div className="small-master-ball__right" />
        <p className="small-master-ball__sign ">M</p>
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

export default SmallMasterball;
