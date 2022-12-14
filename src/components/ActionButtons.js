import React from 'react';

const ActionButtons = (props) => {
  const choosenCards = { cardsData: props.choosenPokemonCards };
  const pickChoosenCards = async () => {
    console.log(choosenCards);
    await props.pickCards(choosenCards);
  };
  let status = true;
  props.choosenCardLength > 0 ? (status = false) : (status = true);
  return props.credit === null ? (
    <></>
  ) : (
    <div className="flex-column container-content__second">
      <button
        className="shuffle-button"
        onClick={props.insertPokemon}
        disabled={props.buttonDisable}
      >
        Shuffle
      </button>
      <button
        className="pick-button"
        disabled={status}
        onClick={pickChoosenCards}
      >
        Pick
      </button>
      <button onClick={props.show}>ini poke</button>
    </div>
  );
};

export default ActionButtons;
