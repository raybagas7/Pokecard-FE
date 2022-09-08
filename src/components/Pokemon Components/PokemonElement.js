import React from 'react';

const PokemonElement = ({ types }) => {
  const allType = [];
  if (types) {
    for (let i = 0; i < types.length; i++) {
      const take = types[i].type.name;
      allType.push(take);
    }
  }
  //   const show = () => {
  //     console.log('ini pokemon id di cc', types, ' ini all type ', allType);
  //   };

  return (
    <div className="all-elemets">
      <div className="pokemon-types">
        {allType.map((element) => (
          <div className="spesific-element" key={element}>
            <img
              key={element}
              src={`./images/pokemon_elements/${element}.png`}
              alt={element}
            ></img>
            <div className={`tooltip-text tooltip-${element}`}>
              <p className="toolip-content">{element}</p>
            </div>
          </div>
        ))}
        {/* <button onClick={show}>ini elements</button> */}
      </div>
    </div>
  );
};

export default PokemonElement;
