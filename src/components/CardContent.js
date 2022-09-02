import React from 'react';
import PokemonElement from './PokemonElement';
import PokemonStats from './PokemonStats';

const CardContent = ({ imageUrl, id, name, sprites, types, pokeid, stats }) => {
  let allStat = {};
  if (stats) {
    for (let i = 0; i < stats.length; i++) {
      const name_stat = stats[i].stat.name;
      const base_stat = stats[i].base_stat;
      allStat[name_stat] = base_stat;
    }
  }
  // const show = () => {
  //   console.log('ini pokemon id di cc', name, allStat);
  // };
  return (
    <div className="flex-row card-content">
      <div className="box first-box">
        <p>#{pokeid}</p>
        <img
          src={!sprites ? './images/quetion-mark.png' : sprites}
          alt="images"
        />
      </div>
      <div className="box second-box">
        <h4>{name}</h4>
        <PokemonElement types={types} />
        <div className="flex-column__stats">
          <div className="box-1_stats">
            <PokemonStats pokemonStats={stats} box="left" />
          </div>
          <div className="box-2_stats">
            <PokemonStats pokemonStats={stats} box="right" />
          </div>
        </div>
        <div className="flex-column__skills">
          <div className="box-1_skills">
            <p>SKILL SOON</p>
            <p>SKILL SOON</p>
            <p>SKILL SOON</p>
          </div>
          <div className="box-2_skills">
            <p>SKILL SOON</p>
            <p>SKILL SOON</p>
            <p>SKILL SOON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
