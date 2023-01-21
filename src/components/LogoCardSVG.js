import * as React from 'react';

const LogoCardSVG = (props) => (
  <svg
    className="h-auto w-10 max-md:w-6"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 366.83 299.56"
    {...props}
  >
    <defs>
      <style>
        {'.cls-2{stroke:#000;stroke-miterlimit:10;stroke-width:10px}'}
      </style>
    </defs>
    <path
      d="M70.44 250h336.83a10 10 0 0 1 10 10v134.78H60.44V260a10 10 0 0 1 10-10Z"
      transform="rotate(180 211.135 272.28)"
      style={{
        strokeWidth: 10,
        stroke: '#000',
        strokeMiterlimit: 10,
        fill: '#fff',
      }}
    />
    <path
      className="cls-2"
      d="M15 5h336.83a10 10 0 0 1 10 10v134.78H5V15A10 10 0 0 1 15 5Z"
    />
    <path
      style={{
        strokeWidth: 8,
        stroke: '#000',
        strokeMiterlimit: 10,
      }}
      d="M5 144.86h356.83v9.84H5z"
    />
    <path
      style={{
        fill: '#f7ec13',
        strokeWidth: 10,
        stroke: '#000',
        strokeMiterlimit: 10,
      }}
      d="M68.57 8.37h228.96v142.08H68.57z"
    />
    <path
      className="cls-2"
      d="M183.42 52a45.31 45.31 0 0 1 45.31 45.3v49.47h-90.62V97.3A45.31 45.31 0 0 1 183.42 52Z"
    />
  </svg>
);

export default LogoCardSVG;
