import React from 'react';

const UniCardStats = ({ statName, statValue }) => {
  return (
    <div className="flex w-full justify-center">
      <div
        className={`mt-1 mb-1 w-6/10 rounded-full p-1 text-center text-xs
        max-xl:p-0 max-xl:text-xxxs
      ${
        statName === undefined || null
          ? null
          : statName === 'hp'
          ? 'bg-hp-box'
          : statName === 'attack'
          ? 'bg-attack-box'
          : statName === 'defense'
          ? 'bg-defense-box'
          : statName === 'special-attack'
          ? 'bg-special-attack-box'
          : statName === 'special-defense'
          ? 'bg-special-defense-box'
          : statName === 'speed'
          ? 'bg-speed-box'
          : null
      }`}
      >
        <p className="first-letter:capitalize ">
          {statName === 'special-attack'
            ? 'Sp.Att'
            : statName === 'special-defense'
            ? 'Sp.Def'
            : statName}
        </p>
      </div>
      <div className="flex w-7 items-center justify-center max-xl:w-5">
        <p className="text-xs max-xl:text-xxxs">{statValue}</p>
      </div>
    </div>
  );
};

export default UniCardStats;
