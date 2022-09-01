import React from 'react';

const CardContent = ({ imageUrl, id, name, sprites, types, pokeid, stats }) => {
  let type = '';
  if (types) {
    for (let i = 0; i < types.length; i++) {
      const take = types[i].type.name;
      if (i === 0) {
        type += String(take);
      } else {
        type += ' - ' + String(take);
      }
    }
  }

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
  /*imageSoon*/
  return (
    <div className="flex-row card-content">
      <div className="box first-box">
        <p>#{pokeid}</p>
        {/* <a target="_blank" rel="noopener noreferrer" href=".card-content"> */}
        <img
          src={!sprites ? './images/quetion-mark.png' : sprites}
          alt="images"
        />
        {/* </a> */}
      </div>
      <div className="box second-box">
        <h4>{name}</h4>
        <p>Pokemon types: {type}</p>
        <div className="flex-column__stats">
          <div className="box-1_stats">
            <p>Hp: {allStat.hp}</p>
            <p>Defense: {allStat.defense}</p>

            <p>Sp-Defense: {allStat['special-defense']} </p>
          </div>
          <div className="box-2_stats">
            <p>Attack: {allStat.attack}</p>
            <p>Speed: {allStat.speed}</p>
            <p>Sp-Attack: {allStat['special-attack']} </p>
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
