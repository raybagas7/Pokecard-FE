import React from 'react';

const CollectedPokemonStats = ({ pokemonStats, box }) => {
  const spliceName = (stat) => {
    if (stat === "'special-attack'") {
      const textStat = 'Sp.Att';
      return textStat;
    }
    if (stat === "'special-defense'") {
      const textStat = 'Sp.Def';
      return textStat;
    }
    if (stat === "'speed'") {
      return 'Speed';
    }

    return stat;
  };
  const leftStat = pokemonStats.slice(0, 3);
  const rightStat = pokemonStats.slice(3, 6);

  return (
    <>
      {box === 'left'
        ? leftStat.map((stat) => (
            <div className="stat-info_collection" key={Object.keys(stat)}>
              <div
                className={`stat-icon_collection ${Object.keys(
                  stat
                )}-box_collection`}
              >
                <p>{Object.keys(stat)}</p>
              </div>
              <div className="stat-value_collection">
                <p>{stat[Object.keys(stat)]}</p>
              </div>
            </div>
          ))
        : rightStat.map((stat) => (
            <div className="stat-info_collection" key={Object.keys(stat)}>
              <div
                className={`stat-icon_collection ${Object.keys(
                  stat
                )}-box_collection`}
              >
                <p>{spliceName(`'${Object.keys(stat)}'`)}</p>
              </div>
              <div className="stat-value_collection">
                <p>{stat[Object.keys(stat)]}</p>
              </div>
            </div>
          ))}
    </>
  );
};

export default CollectedPokemonStats;
