import React from 'react';

const ActionButtons = (props) => {
  const pickPayload = {
    ...props.pickedBall,
    cardsData: props.choosenPokemonCards,
  };
  // const balls = props.pickedBall;
  const pickChoosenCards = async () => {
    await props.pickCards(pickPayload);
    // await props.reducePokeBalls(balls);
    props.removePokemonPool();
    props.cleanAfterAction();
  };
  const showError = () => {
    console.log(pickPayload);
  };

  // if (props.pickError === false) {

  // }
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
      <button onClick={showError}>ini error</button>
    </div>
  );
};

export default ActionButtons;
