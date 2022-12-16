import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Axios from 'axios';
import ContainerContent from './ContainerContent';
import PokePouch from './PokePouch';
import ActionButtons from '../ActionButtons';
import { getCreditId } from '../../utils/network-data';

const MainContent = ({
  cards,
  credit,
  openCredit,
  shuffleCard,
  pickCards,
  reducePokeBalls,
}) => {
  const [pokemonId, setPokemonId] = useState();
  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const [choosenPokemonCards, setChoosenPokemonCards] = useState([]);
  const [pokeBall, setPokeBall] = useState(0);
  const [ultraBall, setUltraBall] = useState(0);
  const [masterBall, setMasterBall] = useState(0);

  const pickedBall = {
    pokeball_amount: pokeBall,
    ultraball_amount: ultraBall,
    masterball_amount: masterBall,
    creditId: getCreditId(),
  };

  const addOrRemoveCard = (value, status) => {
    if (status) {
      setChoosenPokemonCards((oldArray) => [...oldArray, value]);
    } else {
      setChoosenPokemonCards(
        choosenPokemonCards.filter((item) => item.poke_id !== value.poke_id)
      );
    }
  };

  const removePickedPokemonFromPool = () => {
    // let choosenArray = [];
    const choosenArray = choosenPokemonCards.map((pokemonId) => {
      return pokemonId.id;
    });

    // const newPool = pokemonId.filter(
    //   (pool) => choosenArray.indexOf(pool.id) === -1
    // );

    const newPool = pokemonId.map(
      (pool) =>
        choosenArray.indexOf(pool.id) === -1
          ? pool
          : {
              id: `item ${nanoid(6)}`,
              attribute: undefined,
              imageUrl: '',
            }
      // attribute: choosenArray.indexOf(pool.id) === -1 ? pool.id : undefined,
    );

    // console.log(newPool);
    setPokemonId(newPool);
  };

  const ballRelated = (isLegendary, isShiny, changeBall) => {
    isLegendary === true
      ? setMasterBall(masterBall + changeBall)
      : isShiny === true
      ? setUltraBall(ultraBall + changeBall)
      : setPokeBall(pokeBall + changeBall);

    let ball = {
      pokeBall: pokeBall,
      ultraBall: ultraBall,
      masterBall: masterBall,
    };
    return ball;
  };

  const cleanAfterAction = () => {
    setChoosenPokemonCards([]);
    setPokeBall(0);
    setUltraBall(0);
    setMasterBall(0);
  };

  const getRandom = () => {
    var num = Math.random();
    let probability = '';
    num < 0.95 ? (probability = 'normal') : (probability = 'shiny');
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
    cleanAfterAction();
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
    console.log('ini pokemon yang dipilih: ', choosenPokemonCards);
    console.log('ini pokemon yang shuffle: ', pokemonId);
    // console.log('pokemon pilih jadi array', removePickedPokemonFromPool());
  };

  return (
    <div className="main-content">
      <PokePouch
        credit={credit}
        openCredit={openCredit}
        pickedBall={pickedBall}
      />
      <ContainerContent
        cards={cards}
        pokemonId={pokemonId}
        choosenPokeCards={addOrRemoveCard}
        ballRelated={ballRelated}
      />
      <ActionButtons
        insertPokemon={insertPokemon}
        buttonDisable={isButtonDisabled}
        show={show}
        credit={credit}
        choosenPokemonCards={choosenPokemonCards}
        choosenCardLength={choosenPokemonCards.length}
        pickCards={pickCards}
        pickedBall={pickedBall}
        reducePokeBalls={reducePokeBalls}
        removePokemonPool={removePickedPokemonFromPool}
        cleanAfterAction={cleanAfterAction}
      />
    </div>
  );
};

export default MainContent;
