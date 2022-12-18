import React from 'react';
import CardContent from './CardContent';

const ContainerContent = ({
  cards,
  pokemonId,
  choosenPokeCards,
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
              choosenPokeCards={choosenPokeCards}
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

export default ContainerContent;
