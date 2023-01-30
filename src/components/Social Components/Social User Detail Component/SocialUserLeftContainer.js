import React, { useState } from 'react';
import SocialUserData from './SocialUserData';
import SocialUserRightContainer from './SocialUserRightContainer';
import SocialUserShowcases from './SocialUserShowcases';

const SocialUserLeftContainer = ({
  showcases,
  totalCards,
  tradeCards,
  ownedCards,
}) => {
  //   console.log(showcases, totalCards);
  // console.log('showc', showcases);
  // console.log('showtrade', tradeCards);
  const [pokemonData, setPokemonData] = useState(showcases[0]);
  const topShowcases = showcases.slice(0, 3);
  const botShowcases = showcases.slice(3, 6);

  const changePokemonDetails = (showCaseNumber) => {
    setPokemonData(showcases[showCaseNumber]);
  };

  return (
    <>
      <div
        className={`max-lg:ml relative m-10 mr-2 ml-5 flex-1 flex-col items-center justify-center
      gap-1 max-lg:m-10
      max-md:m-2`}
      >
        <div className="border-1 border-1 h-full w-full rounded-lg border-y-2 border-white bg-white/30 drop-shadow-lg backdrop-blur-md">
          <div
            className={`flex h-full w-full flex-col items-center justify-center
          gap-1 p-5`}
          >
            <div
              className={`flex w-fit items-center justify-center rounded-lg bg-black-steam/90
            drop-shadow-md
            max-md:w-8/10`}
            >
              <SocialUserData userInfo={totalCards} />
            </div>
            <div
              className="min-h-96 h-96 w-full rounded-lg
           bg-black-steam/90 drop-shadow-md
           max-xl:h-60
           max-lg:h-72
           max-md:h-60"
            >
              <SocialUserShowcases
                showcases={topShowcases}
                changePokemonDetails={changePokemonDetails}
              />
            </div>
            <div
              className="min-h-96 h-96 w-full rounded-lg
           bg-black-steam/90 drop-shadow-md
           max-xl:h-60
           max-lg:h-72
           max-md:h-60"
            >
              <SocialUserShowcases
                showcases={botShowcases}
                changePokemonDetails={changePokemonDetails}
              />
            </div>
          </div>
        </div>
      </div>
      <SocialUserRightContainer
        pokemonData={pokemonData}
        tradeCards={tradeCards}
        userTrainerName={totalCards.trainer_name}
        ownedCards={ownedCards}
      />
    </>
  );
};

export default SocialUserLeftContainer;
//@media screen and (max-width: 1000px)
