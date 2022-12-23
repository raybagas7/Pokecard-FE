import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
// import Axios from 'axios';
import ContainerContent from './ContainerContent';
import PokePouch from './PokePouch';
import ActionButtons from '../ActionButtons';
import { getCreditId } from '../../utils/network-data';
import Swal from 'sweetalert2';
import axios from 'axios';
import PropTypes from 'prop-types';
// import axiosRetry from 'axios-retry';

const MainContent = ({
  cards,
  credit,
  openCredit,
  shuffleCard,
  pickCards,
  ownedBall,
  coins,
  // reducePokeBalls,
}) => {
  const [pokemonId, setPokemonId] = useState();
  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const [choosenPokemonCards, setChoosenPokemonCards] = useState([]);
  const [neededPokeBall, setNeededPokeBall] = useState(0);
  const [neededUltraBall, setNeededUltraBall] = useState(0);
  const [neededMasterBall, setNeededMasterBall] = useState(0);

  const pickedBall = {
    pokeball_amount: neededPokeBall,
    ultraball_amount: neededUltraBall,
    masterball_amount: neededMasterBall,
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

    console.log(newPool);
    setPokemonId(newPool);
  };

  const ballRelated = (isLegendary, isShiny, changeBall) => {
    isLegendary === true
      ? setNeededMasterBall(neededMasterBall + changeBall)
      : isShiny === true
      ? setNeededUltraBall(neededUltraBall + changeBall)
      : setNeededPokeBall(neededPokeBall + changeBall);
  };

  const cleanAfterAction = () => {
    setChoosenPokemonCards([]);
    setNeededPokeBall(0);
    setNeededUltraBall(0);
    setNeededMasterBall(0);
  };

  const getRandom = () => {
    var num = Math.random();
    let probability = '';
    num < 0.95 ? (probability = 'normal') : (probability = 'shiny');
    return probability;
  };

  function* shuffleMoveGenerator(array) {
    // console.log('aneh', array);
    var i = array.length;

    while (i--) {
      yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    }
  }

  const getMovesLength = (moves) => {
    // const totalMoves = moves.length;
    if (moves.length > 0) {
      const shuffleMoves = shuffleMoveGenerator(moves);
      // console.log('ehe', shuffleMoves);
      const tempMoves = [];

      for (let i = 0; i < 2; i++) {
        tempMoves.push(shuffleMoves.next().value);
      }

      const takenMoves = [];
      for (let i = 0; i < 2; i++) {
        takenMoves.push({
          name: tempMoves[i].move.name,
          url: tempMoves[i].move.url,
        });
      }

      return takenMoves;
    } else {
      const dummy = [
        {
          move: {
            name: 'stomp',
            url: 'https://pokeapi.co/api/v2/move/23/',
          },
        },
        {
          move: {
            name: 'double-kick',
            url: 'https://pokeapi.co/api/v2/move/24/',
          },
        },
      ];
      const shuffleMoves = shuffleMoveGenerator(dummy);
      const tempMoves = [];

      for (let i = 0; i < 2; i++) {
        tempMoves.push(shuffleMoves.next().value);
      }

      const takenMoves = [];
      for (let i = 0; i < 2; i++) {
        takenMoves.push({
          name: tempMoves[i].move.name,
          url: tempMoves[i].move.url,
        });
      }

      return takenMoves;
    }
  };

  const shufflePokemon = async () => {
    const a = [];
    let temp = 0;
    a.splice(0);
    do {
      temp++;
      // retryWrapper(axios, { retry_time: 3 });
      const idCard = nanoid(16);
      const randomId = Math.floor(1 + Math.random() * 905);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
        .then((response) => {
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
            moves: getMovesLength(response.data.moves),
            animatedSpritesNormal:
              response.data.sprites.versions['generation-v']['black-white']
                .animated.front_default,
            animatedSpritesShiny:
              response.data.sprites.versions['generation-v']['black-white']
                .animated.front_shiny,
            attribute: getRandom(),
            choose: false,
          });
        })
        .catch((err) => {
          a.push({
            id: `item ${nanoid(6)}`,
            imageUrl: '',
            attribute: undefined,
          });
          console.log('FREE, AND ERROR: ', err);
        });
    } while (temp < 6);
    return a;
  };

  const insertPokemon = async () => {
    if (coins < 100) {
      Swal.fire({
        title: `No Coin Left`,
        customClass: {
          popup: 'colored-toast-coin colored-toast',
          closeButton: 'colored-toast-close',
        },
      });
    } else {
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
    }
  };

  const show = () => {
    console.log(
      'ini pokemon yang dipilih choosenPokemon : ',
      choosenPokemonCards
    );
    console.log('ini pokemon yang shuffle pokemonId : ', pokemonId);
    console.log('picked ', pickedBall);
    console.log('owned ', ownedBall);
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
        addOrRemoveCard={addOrRemoveCard}
        ballRelated={ballRelated}
        pickedBall={pickedBall}
        ownedBall={ownedBall}
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
        // reducePokeBalls={reducePokeBalls}
        removePokemonPool={removePickedPokemonFromPool}
        cleanAfterAction={cleanAfterAction}
      />
    </div>
  );
};

MainContent.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  credit: PropTypes.object,
  openCredit: PropTypes.func.isRequired,
  shuffleCard: PropTypes.func.isRequired,
  pickCards: PropTypes.func.isRequired,
  ownedBall: PropTypes.objectOf(PropTypes.number),
  coins: PropTypes.number,
};

export default MainContent;
