import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContainerContent from './ContainerContent';
import PokePouch from './PokePouch';
import ActionButtons from '../ActionButtons';
import {
  getCreditId,
  getShuffledCardRefresh,
  updateShuffledCardRefresh,
} from '../../utils/network-data';
import Swal from 'sweetalert2';
import axios from 'axios';
import PropTypes from 'prop-types';

const MainContent = ({
  cards,
  credit,
  openCredit,
  shuffleCard,
  pickCards,
  ownedBall,
  coins,
  claimDaily,
  dailyGift,
  isValid,
}) => {
  const [pokemonId, setPokemonId] = useState();
  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const [choosenPokemonCards, setChoosenPokemonCards] = useState([]);
  const [neededPokeBall, setNeededPokeBall] = useState(0);
  const [neededUltraBall, setNeededUltraBall] = useState(0);
  const [neededMasterBall, setNeededMasterBall] = useState(0);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
  });

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

  const removePickedPokemonFromPool = async () => {
    const choosenArray = choosenPokemonCards.map((pokemonId) => {
      return pokemonId.id;
    });
    const newPool = pokemonId.map((pool) =>
      choosenArray.indexOf(pool.id) === -1
        ? pool
        : {
            id: `${nanoid(16)}`,
            pokeid: null,
            name: null,
            spritesNormal: null,
            spritesShiny: null,
            types: null,
            stats: null,
            speciesUrl: null,
            moves: null,
            animatedSpritesNormal: null,
            animatedSpritesShiny: null,
            attribute: null,
            choose: null,
          }
    );

    // console.log(newPool);
    await saveShuffledPokemon({ cardsData: newPool });
    setPokemonId(newPool);
  };

  const ballRelated = (isLegendary, isMythical, isShiny, changeBall) => {
    isLegendary === true || isMythical === true
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
    // console.log(num);
    let probability = '';
    num < 0.995 ? (probability = 'normal') : (probability = 'shiny');
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
    if (moves.length > 0) {
      const shuffleMoves = shuffleMoveGenerator(moves);
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
      const idCard = nanoid(16);
      const randomId = Math.floor(1 + Math.random() * 905);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
        .then((response) => {
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
          // console.log('FREE, AND ERROR: ', err);
        });
    } while (temp < 6);
    return a;
  };

  const saveShuffledPokemon = async (payload) => {
    try {
      await updateShuffledCardRefresh(payload).then(
        ({ error, data, message }) => {
          // console.log(data);
        }
      );
    } catch (e) {
      // console.log(e);
    }
  };

  const insertPokemon = async () => {
    if (coins < 100) {
      Toast.fire({
        icon: 'warning',
        title: `No Coin Left`,
      });
    } else {
      cleanAfterAction();
      setisButtonDisabled(true);
      setTimeout(() => {
        setisButtonDisabled(false);
      }, 3500);
      const result = await shufflePokemon();
      setTimeout(async () => {
        await shuffleCard();
        await saveShuffledPokemon({ cardsData: result });
        setPokemonId(result);
      }, 1500);
    }
  };

  React.useEffect(() => {
    getShuffledCardRefresh().then(({ error, data, message }) => {
      // console.log('dataku', data.cards);
      setPokemonId(data.cards);
    });
  }, []);

  // const show = () => {
  //   console.log(
  //     'ini pokemon yang dipilih choosenPokemon : ',
  //     choosenPokemonCards
  //   );
  //   console.log('ini pokemon yang shuffle pokemonId : ', pokemonId);
  //   console.log('picked ', pickedBall);
  //   console.log('owned ', ownedBall);
  // };

  return (
    <div className="main-content">
      <PokePouch
        credit={credit}
        openCredit={openCredit}
        pickedBall={pickedBall}
        claimDaily={claimDaily}
        dailyGift={dailyGift}
        isValid={isValid}
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
        // show={show}
        credit={credit}
        choosenPokemonCards={choosenPokemonCards}
        choosenCardLength={choosenPokemonCards.length}
        pickCards={pickCards}
        pickedBall={pickedBall}
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
