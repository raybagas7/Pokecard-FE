import React from 'react';
import ExtraSmallCircleSVG from '../../Profile Components/ExtraSmallCircleSVG';
import MasterBallCardSVG from '../../Profile Components/MasterBallCardSVG';
import MasterShineBallCardSVG from '../../Profile Components/MasterShineBallCardSVG';
import PokeBallCardSVG from '../../Profile Components/PokeBallCardSVG';
import UltraBallCardSVG from '../../Profile Components/UltraBallCardSVG';

const SocialCardsOwned = ({ normal, shiny, legendarymyth, lmshine }) => {
  return (
    <div className="flex flex-1 items-center justify-center rounded-br-2xl ">
      <div className="m-1 flex h-fit w-fit items-center justify-center">
        <div className="relative">
          <PokeBallCardSVG />
        </div>
        <div className="absolute">
          <ExtraSmallCircleSVG />
        </div>
      </div>
      <p className="text-sm">{normal ? normal : '0'}</p>
      <div className="m-1 flex h-fit w-fit items-center justify-center">
        <div className="relative">
          <UltraBallCardSVG />
        </div>
        <div className="absolute">
          <ExtraSmallCircleSVG />
        </div>
      </div>
      <p className="text-sm">{shiny ? shiny : '0'}</p>
      <div className="m-1 flex h-fit w-fit items-center justify-center">
        <div className="relative">
          <MasterBallCardSVG />
        </div>
        <div className="absolute">
          <ExtraSmallCircleSVG />
        </div>
      </div>
      <p className="text-sm">{legendarymyth ? legendarymyth : '0'}</p>
      <div className="m-1 flex h-fit w-fit items-center justify-center">
        <div className="relative">
          <MasterShineBallCardSVG />
        </div>
        <div className="absolute">
          <ExtraSmallCircleSVG />
        </div>
      </div>
      <p className="text-sm">{lmshine ? lmshine : '0'}</p>
    </div>
  );
};

export default SocialCardsOwned;
