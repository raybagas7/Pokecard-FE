import React from 'react';
import PropTypes from 'prop-types';

const ActionButtons = (props) => {
  const pickPayload = {
    ...props.pickedBall,
    cardsData: props.choosenPokemonCards,
  };

  const pickChoosenCards = async () => {
    await props.pickCards(pickPayload, props.choosenPokemonCards);
    props.removePokemonPool();
    props.cleanAfterAction();
  };
  let status = true;
  props.choosenCardLength > 0 ? (status = false) : (status = true);
  return props.credit === null ? (
    <></>
  ) : (
    <div className="flex-column container-content__second">
      <button
        className="shuffle-button disabled:animate-pulse"
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
    </div>
  );
};

ActionButtons.propTypes = {
  insertPokemon: PropTypes.func.isRequired,
  buttonDisable: PropTypes.bool.isRequired,
  credit: PropTypes.object,
  choosenPokemonCards: PropTypes.arrayOf(PropTypes.object.isRequired)
    .isRequired,
  choosenCardLength: PropTypes.number.isRequired,
  pickCards: PropTypes.func.isRequired,
  pickedBall: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ])
  ).isRequired,
  removePokemonPool: PropTypes.func.isRequired,
  cleanAfterAction: PropTypes.func.isRequired,
};
export default ActionButtons;
