import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Axios from 'axios';
import ContainerContent from './ContainerContent';
import PokePouch from './PokePouch';

const MainContent = ({ cards, elements }) => {
  const [pokemonId, setPokemonId] = useState();
  const [isButtonDisabled, setisButtonDisabled] = useState(false);

  const getRandom = () => {
    var num = Math.random();
    let probability = '';
    num < 0.99 ? (probability = 'normal') : (probability = 'shiny');
    return probability;
  };

  const shufflePokemon = async () => {
    const a = [];
    a.splice(0);
    for (let i = 0; i < 6; i++) {
      const idCard = nanoid(16);
      const randomId = Math.floor(Math.random() * 898);
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`).then(
        (response) => {
          // console.log(response);
          a.push({
            id: idCard,
            pokeid: response.data.id,
            name: response.data.name,
            spritesNormal: response.data.sprites.front_default,
            spritesShiny: response.data.sprites.front_shiny,
            types: response.data.types,
            stats: response.data.stats,
            attribute: getRandom(),
            choose: false,
          });
        }
      );
    }
    return a;
  };

  const insertPokemon = async () => {
    setisButtonDisabled(true);
    setTimeout(() => {
      setisButtonDisabled(false);
    }, 3200);
    const result = await shufflePokemon();
    setTimeout(() => {
      setPokemonId(result);
    }, 1500);
  };

  // const show = () => {
  //   console.log('ini pokemon id', pokemonId);
  // };

  return (
    <div className="main-content">
      <PokePouch />
      <ContainerContent cards={cards} pokemonId={pokemonId} />
      <div className="flex-column container-content__second">
        <button
          className="shuffle-button"
          onClick={insertPokemon}
          disabled={isButtonDisabled}
        >
          Shuffle
        </button>
        <button className="pick-button" disabled={true}>
          Pick
        </button>
        {/* <button onClick={show}>ini poke</button> */}
      </div>
    </div>
  );
};

export default MainContent;
