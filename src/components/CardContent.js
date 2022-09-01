import React from 'react';

const CardContent = ({ imageUrl, id, name, sprites, types, pokeid }) => {
  let type = '';
  if (types) {
    for (let i = 0; i < types.length; i++) {
      const take = types[i].type.name;
      if (i === 0) {
        type += String(take);
        console.log(take);
      } else {
        type += ' - ' + String(take);
        console.log(take);
      }
    }
  }

  // const show = () => {
  //   console.log('ini pokemon id di cc', id, name, sprites, types);
  // };
  /*imageSoon*/
  return (
    <div className="flex-row card-content">
      <div className="box first-box">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={!sprites ? '' : sprites}
        >
          <img
            src={
              !sprites
                ? './IThinkMyPersonal/images/jumboront-white-gold.png'
                : sprites
            }
            alt="images"
          />
        </a>
      </div>
      <div className="box second-box">
        <h4>{name}</h4>
        <p>Pokemon Id : {pokeid}</p>
        <p>Tipe pokemon : {type}</p>
      </div>
    </div>
  );
};

export default CardContent;
