import React, { useState } from 'react';
import useInputFile from '../../hooks/useInputFile';
import useInputFilePath from '../../hooks/useInputFilePath';
import Swal from 'sweetalert2';
import { changeProfilePictureRefresh } from '../../utils/network-data';

const SettingsProfileImage = ({ trainerName, profileImg }) => {
  const [newUserPP, handlerNewUserPP] = useInputFile();
  const [localUserPP, handlerLocalUserPP] = useInputFilePath();
  const [showChangeButton, setShowChangeButton] = useState(
    newUserPP ? true : false
  );

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
    Swal.fire({
      title: `Change Your Profile Picture?`,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        popup: 'verification-swal',
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await changeProfilePictureRefresh(newUserPP);
        // console.log(result);
        if (!result.error) {
          Toast.fire({
            icon: 'success',
            title: `${result.message}`,
          });
          setShowChangeButton(false);
        } else {
          Toast.fire({
            icon: 'error',
            title: `${result.message}`,
          });
        }
      } else if (result.isDenied) {
      }
    });
  };

  const change = (event) => {
    handlerNewUserPP(event);
    handlerLocalUserPP(event);
    setShowChangeButton(true);
  };

  //   const show = () => {
  //     console.log(newUserPP);
  //     console.log('hehe', showUserPP);
  //     // console.log(formData);
  //   };

  return (
    <div className="w-52 rounded-2xl bg-white/80 p-2">
      <div className="relative rounded-t-lg border-2 border-black-steam/50 p-2">
        <img
          src={
            !localUserPP
              ? profileImg
                ? profileImg
                : './images/pokemon_elements/normal.png'
              : localUserPP
          }
          alt="profile pictures"
          className={`block h-44 w-44 rounded-lg border-2 border-black-steam/50 object-cover`}
        ></img>
        {/* <div className="absolute top-0 right-0 h-full w-full bg-teal-400"></div> */}
        <div className="absolute right-0 bottom-0 flex w-full flex-col p-2">
          <label
            className="w-full cursor-pointer rounded-b-lg border-b-2 border-r-2 border-l-2 border-black-steam/50 bg-white/80 p-1
            text-center text-sm
          text-black transition duration-300 hover:bg-orange-poke hover:text-white"
          >
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={change}
              className="hidden "
            />
            <p>Change Picture</p>
          </label>
        </div>
      </div>
      {showChangeButton ? (
        <button
          className="w-full border-r-2 border-l-2 border-black-steam/50 bg-gold-poke text-black
          transition duration-300 hover:bg-orange-poke hover:text-white"
          onClick={showAlert}
        >
          Change
        </button>
      ) : null}
      <div className="overflow-hidden whitespace-nowrap rounded-b-2xl bg-black-steam p-1 text-center text-base text-white">
        <p>{trainerName}</p>
      </div>
    </div>
  );
};

export default SettingsProfileImage;
