import * as React from 'react';

const ExtraSmallCircleSVG = (props) => (
  <svg
    className="h-auto w-3 animate-horizontal_shake max-lg:animate-none"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 112.04 112.04"
    {...props}
  >
    <circle
      cx={56.02}
      cy={56.02}
      r={51.02}
      style={{
        strokeWidth: 10,
        fill: '#fff',
        stroke: '#000',
        strokeMiterlimit: 10,
      }}
    />
    <circle
      cx={55.89}
      cy={56.69}
      r={18.93}
      style={{
        strokeWidth: 8,
        fill: '#fff',
        stroke: '#000',
        strokeMiterlimit: 10,
      }}
    />
  </svg>
);

export default ExtraSmallCircleSVG;
