import React from 'react';
import SmallCoin from '../Pokemon Components/SmallCoin';
import SmallMasterball from '../Pokemon Components/SmallMasterball';
import SmallPokeball from '../Pokemon Components/SmallPokeball';
import SmallUltraBall from '../Pokemon Components/SmallUltraBall';
import PropTypes from 'prop-types';
import { IoCopy } from 'react-icons/io5';
import Swal from 'sweetalert2';
import PokeBallCardSVG from './PokeBallCardSVG';
import UltraBallCardSVG from './UltraBallCardSVG';
import MasterBallCardSVG from './MasterBallCardSVG';
import ExtraSmallCircleSVG from './ExtraSmallCircleSVG';
import MasterShineBallCardSVG from './MasterShineBallCardSVG';

const ProfileUserData = ({ userData, userCredit }) => {
  // console.log('creditnya', userCredit);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const showAlert = () => {
    navigator.clipboard.writeText(userData.user.search_id);
    Toast.fire({
      icon: 'success',
      title: `Search Id Copied`,
    });
  };
  return (
    <div
      className={`relative flex flex-1 rounded-lg 
    max-xl:flex-col
    max-lg:flex-none max-lg:flex-row
    max-md:w-9/10 max-md:flex-col`}
    >
      <div
        className={`relative flex flex-1 flex-col items-center rounded-lg p-2.5 text-sm 
      max-xl:mt-2 max-xl:items-center max-xl:justify-center max-xl:p-0.5
      max-lg:mt-0`}
      >
        <div className="flex h-36 w-36 flex-1 items-center justify-center">
          <img
            src={
              userData.user.profile_img
                ? userData.user.profile_img
                : 'https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/pokemon_elements/normal.png'
            }
            alt="profile pictures"
            className={`block aspect-square h-36 w-36 rounded-lg border-2 border-white/50 object-contain
            max-xl:h-20 max-xl:w-20
            max-lg:m-2 max-lg:h-28 max-lg:w-28
            max-md:h-32 max-md:w-32`}
          ></img>
        </div>
      </div>
      <div className="flex flex-2 flex-col p-1.5">
        <header className="flex flex-row items-start justify-between border-b border-white/50 text-sm max-xl:text-xs">
          <div className="p-1.5">{userData.user.trainer_name}</div>
          <div className="header-info flex items-center justify-center p-1.5 ">
            Friend Id
            <IoCopy
              className="mr-1 ml-3 cursor-pointer hover:text-yellow-300"
              onClick={showAlert}
            />{' '}
            {userData.user.search_id}
          </div>
        </header>
        <div
          className={`flex flex-1 p-1.5 
        max-xl:flex-col`}
        >
          <div className="flex-1 max-xl:flex max-xl:justify-center">
            <div className="flex items-center p-1 pl-3 max-xl:pl-1">
              <SmallPokeball />
              <p className="text-sm max-xl:text-xxs">
                {userCredit ? userCredit.poke_ball : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3 max-xl:pl-1">
              <SmallUltraBall />
              <p className="text-sm max-xl:text-xxs">
                {userCredit ? userCredit.ultra_ball : '0'}
              </p>
            </div>
            <div className=" flex items-center p-1 pl-3 max-xl:pl-1">
              <SmallMasterball />
              <p className="text-sm max-xl:text-xxs">
                {userCredit ? userCredit.master_ball : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3 max-xl:pl-1 ">
              <SmallCoin />
              <p className="ml-1 text-sm max-xl:ml-0 max-xl:text-xxs">
                {userCredit ? userCredit.coin : '0'}
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center border-l border-white/50 max-xl:mt-2 max-xl:flex-row max-xl:border-l-0 max-xl:border-t">
            <div className="flex items-center p-1 pl-3 max-xl:mt-1">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <PokeBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm max-xl:text-xxs">
                {userCredit ? userCredit.normal : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3 max-xl:mt-1">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <UltraBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm max-xl:text-xxs">
                {userCredit ? userCredit.shiny : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3 max-xl:mt-1">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <MasterBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm max-xl:text-xxs">
                {userCredit ? userCredit.legendarymyth : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3 max-xl:mt-1">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <MasterShineBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm max-xl:text-xxs">
                {userCredit ? userCredit.lmshine : '0'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileUserData.propTypes = {
  userData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};

export default ProfileUserData;
