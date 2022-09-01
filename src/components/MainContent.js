import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import ContainerContent from './ContainerContent';

const MainContent = ({ cards }) => {
  const [pokemonId, setPokemonId] = useState();
  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const a = [];
  const shufflePokemon = () => {
    a.splice(0);
    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        const randomId = Math.floor(Math.random() * 898);
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`).then(
          (response) => {
            console.log(response);
            a.push({
              id: i,
              pokeid: response.data.id,
              name: response.data.name,
              sprites: response.data.sprites.front_default,
              types: response.data.types,
              stats: response.data.stats,
            });
          }
        );
      }
    }, 1000);
  };

  const insertPokemon = () => {
    setisButtonDisabled(true);
    setTimeout(() => {
      setisButtonDisabled(false);
    }, 3200);
    shufflePokemon();
    setTimeout(() => {
      setPokemonId(a);
    }, 1500);
  };

  // const show = () => {
  //   console.log('ini pokemon id', pokemonId);
  // };

  return (
    <div className="main-content">
      <ContainerContent cards={cards} pokemonId={pokemonId} />
      <div className="flex-column container-content__second">
        <button
          className="shuffle-button"
          onClick={insertPokemon}
          disabled={isButtonDisabled}
        >
          Shuffle
        </button>
        {/* <button onClick={show}>ini poke</button> */}
      </div>
    </div>
  );
};

export default MainContent;
