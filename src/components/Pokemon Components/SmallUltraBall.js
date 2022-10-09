import React from 'react';
import '../../styles/ultra-ball-style.css';

const SmallUltraBall = () => {
  return (
    <div className="small-pokeball">
      <div className="small-ultra-upper">
        <div className="small-ultra-ball__box" />
        <div className="small-ultra-ball__inverted" />
        <div className="xsmall-line-upper"></div>
        <div className="xsmall-upper-ball"></div>
        <div className="xsmall-upper-ball__xsmall"></div>
        <div className="small-ultra-upper__border"></div>
      </div>
      <div className="small-pokeball-bottom">
        <div className="xsmall-line-bottom"></div>
        <div className="xsmall-bottom-ball"></div>
        <div className="xsmall-bottom-ball__xsmall"></div>
      </div>
    </div>
  );
};

export default SmallUltraBall;
