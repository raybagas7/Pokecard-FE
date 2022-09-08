import React from 'react';

const PokemonStats = ({ pokemonStats, pokemonAttribute, box }) => {
  let allStat = [];
  if (pokemonStats) {
    for (let i = 0; i < pokemonStats.length; i++) {
      if (pokemonAttribute === 'shiny') {
        const name_stat = pokemonStats[i].stat.name;
        const base_stat = pokemonStats[i].base_stat + 10;
        allStat.push({ [name_stat]: base_stat });
      } else {
        const name_stat = pokemonStats[i].stat.name;
        const base_stat = pokemonStats[i].base_stat;
        allStat.push({ [name_stat]: base_stat });
      }
    }
  }
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
  const leftStat = allStat.slice(0, 3);
  const rightStat = allStat.slice(3, 6);
  return (
    <>
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

export default PokemonStats;
