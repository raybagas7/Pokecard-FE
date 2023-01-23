import React from 'react';
import Swal from 'sweetalert2';
import ExtraSmallCircleSVG from '../../Profile Components/ExtraSmallCircleSVG';
import MasterBallCardSVG from '../../Profile Components/MasterBallCardSVG';
import MasterShineBallCardSVG from '../../Profile Components/MasterShineBallCardSVG';
import { IoCopy } from 'react-icons/io5';
import PokeBallCardSVG from '../../Profile Components/PokeBallCardSVG';
import UltraBallCardSVG from '../../Profile Components/UltraBallCardSVG';

const SocialUserData = ({ userInfo }) => {
  // console.log('asd', userInfo);
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
    navigator.clipboard.writeText(userInfo.search_id);
    Toast.fire({
      icon: 'success',
      title: `Search Id Copied`,
    });
  };

  return (
    <div
      className={`relative rounded-lg
    max-md:w-9/10 max-md:flex-col`}
    >
      <div
        className={`relative mt-2 flex flex-1 flex-col items-center 
      justify-center rounded-lg p-0.5 text-sm
      max-lg:mt-0`}
      >
        <div className="flex flex-1 items-center justify-center">
          <img
            src={
              userInfo.profile_img
                ? userInfo.profile_img
                : './images/pokemon_elements/normal.png'
            }
            alt="profile pictures"
            className={`block aspect-square h-28 w-28 rounded-lg border-2 
            border-white/50 object-cover
            max-lg:m-2 max-lg:h-32 max-lg:w-32
            max-md:h-32 max-md:w-32`}
          ></img>
        </div>
      </div>
      <div className="flex flex-2 flex-col p-1.5">
        <header className="flex flex-row items-start justify-between border-b border-white/50 text-sm max-xl:text-xs">
          <div className="p-1.5">{userInfo.trainer_name}</div>
          <div className="header-info flex items-center justify-center p-1.5 ">
            Friend Id
            <IoCopy
              className="mr-1 ml-3 cursor-pointer hover:text-yellow-300"
              onClick={showAlert}
            />{' '}
            {userInfo.search_id}
          </div>
        </header>
        <div
          className={`flex flex-1 p-1.5 
        max-xl:flex-col`}
        >
          <div className="mt-2 flex flex-1 flex-row justify-center ">
            <div className="mt-1 flex items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <PokeBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm max-xl:text-xxs">
                {userInfo ? userInfo.normal : '0'}
              </p>
            </div>
            <div className="mt-1 flex items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <UltraBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm max-xl:text-xxs">
                {userInfo ? userInfo.shiny : '0'}
              </p>
            </div>
            <div className="mt-1 flex items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <MasterBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm text-xxs">
                {userInfo ? userInfo.legendarymyth : '0'}
              </p>
            </div>
            <div className="mt-1 flex items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <MasterShineBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm max-xl:text-xxs">
                {userInfo ? userInfo.lmshine : '0'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialUserData;
