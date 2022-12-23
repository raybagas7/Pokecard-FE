import React from 'react';
import CardContent from './CardContent';
import PropTypes from 'prop-types';

const ContainerContent = ({
  cards,
  pokemonId,
  addOrRemoveCard,
  ballRelated,
  pickedBall,
  ownedBall,
}) => {
  // const [species, setSpecies] = useState();

  //  const isLegendary = async () => {
  //   Axios.get(`${pokemonId.speciesUrl}`).then((response) => {
  //     setSpecies(response.data.is_legendary);
  //   }
  //   )
  // }
  // isLegendary();

  // const show = () => {
  //   console.log('ini pokemon id di cc', species);
  // };

  return (
    <div className="flex-column container-content__first">
      {pokemonId
        ? pokemonId.map((pokemonId) => (
            <CardContent
              key={pokemonId.id}
              {...pokemonId}
              addOrRemoveCard={addOrRemoveCard}
              ballRelated={ballRelated}
              pickedBall={pickedBall}
              ownedBall={ownedBall}
            />
          ))
        : cards.map((card) => <CardContent key={card.id} {...card} />)}
      {/* {cards.map((card) => (
        <CardContent key={card.id} {...card} pokemonId={pokemonId} />
      ))} */}
      {/* <button onClick={show}>ini cards</button> */}
    </div>
  );
};

ContainerContent.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemonId: PropTypes.arrayOf(PropTypes.object),
  addOrRemoveCard: PropTypes.func.isRequired,
  ballRelated: PropTypes.func.isRequired,
  pickedBall: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  ownedBall: PropTypes.objectOf(PropTypes.number),
};

export default ContainerContent;
