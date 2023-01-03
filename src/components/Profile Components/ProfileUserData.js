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
  console.log('creditnya', userCredit);
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
    <div className="relative flex flex-1 rounded-lg ">
      <div className="relative flex flex-1 flex-col rounded-lg p-2.5 text-sm">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="./images/snoop.jpg"
            alt="profile pictures"
            className="mr-auto block h-fit w-fit rounded-lg border-2 border-white/50 object-contain p-3"
          ></img>
        </div>
      </div>
      <div className="flex flex-2 flex-col p-1.5">
        <header className="flex flex-row items-start justify-between border-b border-white/50 text-sm">
          <div className="p-1.5">{userData.user.trainer_name}</div>
          <div className="header-info flex items-center justify-center p-1.5">
            Friend Id
            <IoCopy
              className="mr-1 ml-3 cursor-pointer hover:text-yellow-300"
              onClick={showAlert}
            />{' '}
            {userData.user.search_id}
          </div>
        </header>
        <div className="flex flex-1 p-1.5">
          <div className="flex-1 ">
            <div className="flex items-center p-1 pl-3">
              <SmallPokeball />
              <p className="text-sm">
                {userCredit ? userCredit.poke_ball : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3">
              <SmallUltraBall />
              <p className="text-sm">
                {userCredit ? userCredit.ultra_ball : '0'}
              </p>
            </div>
            <div className=" flex items-center p-1 pl-3">
              <SmallMasterball />
              <p className="text-sm">
                {userCredit ? userCredit.master_ball : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3">
              <SmallCoin />
              <p className="ml-1 text-sm">
                {userCredit ? userCredit.coin : '0'}
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center border-l border-white/50">
            <div className="flex flex-row items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <PokeBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm">
                {userCredit ? userCredit.normal : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <UltraBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm">
                {userCredit ? userCredit.shiny : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <MasterBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm">
                {userCredit ? userCredit.legendarymyth : '0'}
              </p>
            </div>
            <div className="flex items-center p-1 pl-3">
              <div className="flex h-fit w-fit items-center justify-center">
                <div className="relative">
                  <MasterShineBallCardSVG />
                </div>
                <div className="absolute">
                  <ExtraSmallCircleSVG />
                </div>
              </div>
              <p className="ml-2 text-sm">
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
