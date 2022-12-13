import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Axios from 'axios';
import ContainerContent from './ContainerContent';
import PokePouch from './PokePouch';
import ActionButtons from '../ActionButtons';

const MainContent = ({ cards, credit, openCredit, shuffleCard }) => {
  const [pokemonId, setPokemonId] = useState();
  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const [choosenPokemonCards, setChoosenPokemonCards] = useState([]);

  const addOrRemoveCard = (value, status) => {
    if (status) {
      setChoosenPokemonCards((oldArray) => [...oldArray, value]);
    } else {
      setChoosenPokemonCards(
        choosenPokemonCards.filter((item) => item.poke_id !== value.poke_id)
      );
    }

    console.log('status : ', status);
  };

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
            speciesUrl: response.data.species.url,
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
      shuffleCard();
      setPokemonId(result);
    }, 1500);
  };

  const show = () => {
    console.log('ini pokemon id: ', choosenPokemonCards);
    console.log('panjangnya: ', choosenPokemonCards.length);
  };

  return (
    <div className="main-content">
      <PokePouch credit={credit} openCredit={openCredit} />
      <ContainerContent
        cards={cards}
        pokemonId={pokemonId}
        choosenPokeCards={addOrRemoveCard}
      />
      <ActionButtons
        insertPokemon={insertPokemon}
        buttonDisable={isButtonDisabled}
        show={show}
        credit={credit}
        choosenCardLength={choosenPokemonCards.length}
      />
    </div>
  );
};

export default MainContent;
