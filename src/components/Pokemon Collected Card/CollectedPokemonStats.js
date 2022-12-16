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

  // const show = () => {
  //   console.log('ini stats', pokemonStats);
  // };
  return (
    <>
      {/* <button onClick={show}>ini stats</button> */}
      {box === 'left'
        ? leftStat.map((stat) => (
            <div className="stat-info" key={Object.keys(stat)}>
              <div className={`stat-icon ${Object.keys(stat)}-box`}>
                <p>{Object.keys(stat)}</p>
              </div>
              <div className="stat-value">
                <p>{stat[Object.keys(stat)]}</p>
              </div>
            </div>
          ))
        : rightStat.map((stat) => (
            <div className="stat-info" key={Object.keys(stat)}>
              <div className={`stat-icon ${Object.keys(stat)}-box`}>
                <p>{spliceName(`'${Object.keys(stat)}'`)}</p>
              </div>
              <div className="stat-value">
                <p>{stat[Object.keys(stat)]}</p>
              </div>
            </div>
          ))}
    </>
  );
};

export default CollectedPokemonStats;
