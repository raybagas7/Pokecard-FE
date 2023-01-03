import * as React from 'react';

const MasterShineBallCardSVG = (props) => (
  <svg
    className="h-auto w-6"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 217.63 299.58"
    {...props}
  >
    <defs>
      <radialGradient
        id="radial-gradient"
        cx={108.55}
        cy={77.41}
        r={89.34}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#7b57a4" />
        <stop offset={1} stopColor="#402e7d" />
      </radialGradient>
      <style>
        {
          '.cls-4{stroke:#000;stroke-miterlimit:10;stroke-width:10px;fill:#f5eb14}'
        }
      </style>
    </defs>
    <path
      d="M145.3 250h187.1a10 10 0 0 1 10 10v134.78H135.3V260a10 10 0 0 1 10-10Z"
      transform="rotate(180 173.7 272.29)"
      style={{
        strokeWidth: 10,
        strokeMiterlimit: 10,
        stroke: '#000',
        fill: '#fff',
      }}
    />
    <path
      d="M15 5h187.1a10 10 0 0 1 10 10v134.8H5V15A10 10 0 0 1 15 5Z"
      style={{
        fill: 'url(#radial-gradient)',
        strokeWidth: 10,
        strokeMiterlimit: 10,
        stroke: '#000',
      }}
    />
    <path
      style={{
        strokeWidth: 8,
        strokeMiterlimit: 10,
        stroke: '#000',
      }}
      d="M5 144.88h207.1v9.84H5z"
    />
    <path
      className="cls-4"
      d="M135.82 132.85c0 15.26-4.54 44.76 13.12 44.76s56.83-42.92 56.83-58.18-20.32-14.21-38-14.21-31.95 12.37-31.95 27.63ZM342.4 132.85c0 15.26 4.54 44.76-13.11 44.76s-56.83-42.92-56.83-58.18 20.32-14.21 38-14.21 31.94 12.37 31.94 27.63Z"
      transform="translate(-130.3 -100.2)"
    />
    <text
      transform="translate(84.81 86.6)"
      style={{
        fontSize: '63.68px',
        stroke: '#fff',
        fontFamily: 'Neucha',
        strokeMiterlimit: 10,
        fill: '#fff',
      }}
    >
      {'M'}
    </text>
  </svg>
);

export default MasterShineBallCardSVG;
