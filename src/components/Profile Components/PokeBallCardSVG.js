import * as React from 'react';

const PokeBallCardSVG = (props) => (
  <svg
    className="h-auto w-6"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 217.1 299.56"
    {...props}
  >
    <defs>
      <style>
        {'.cls-1{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:10px}'}
      </style>
    </defs>
    <path
      className="cls-1"
      d="M145.3 250h187.1a10 10 0 0 1 10 10v134.78H135.3V260a10 10 0 0 1 10-10Z"
      transform="rotate(180 173.7 272.28)"
    />
    <path
      d="M15 5h187.1a10 10 0 0 1 10 10v134.78H5V15A10 10 0 0 1 15 5Z"
      style={{
        fill: '#e32127',
        strokeWidth: 10,
        stroke: '#000',
        strokeMiterlimit: 10,
      }}
    />
    <path
      style={{
        strokeWidth: 8,
        stroke: '#000',
        strokeMiterlimit: 10,
      }}
      d="M5 144.86h207.1v9.84H5z"
    />
  </svg>
);

export default PokeBallCardSVG;
