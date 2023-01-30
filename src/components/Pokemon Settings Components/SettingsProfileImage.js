import React, { useState } from 'react';
// import useInputFile from '../../hooks/useInputFile';
import Swal from 'sweetalert2';
import { changeProfilePictureRefresh } from '../../utils/network-data';
import Cropper from 'cropperjs';

const SettingsProfileImage = ({ trainerName, profileImg }) => {
  const [cropped, setCropped] = useState();
  const [localUserPP, handlerLocalUserPP] = useState();
  const [showChangeButton, setShowChangeButton] = useState(false);
  // const [newPPUrl, setNewPPUrl] = useState();

  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  // const show = () => {
  //   console.log(cropped.size);
  //   console.log(formatBytes(cropped.size));
  //   console.log(localUserPP);
  // };

  // const throttle = (cb, delay) => {
  //   let wait = false;

  //   return (...args) => {
  //     if (wait) {
  //       return;
  //     }

  //     cb(...args);
  //     wait = true;
  //     setTimeout(() => {
  //       wait = false;
  //     }, delay);
  //   };
  // };

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
        const result = await changeProfilePictureRefresh(cropped);
        // console.log(result);
        if (!result.error) {
          Toast.fire({
            icon: 'success',
            title: `${result.message}`,
          });
          console.log(result.status);
          setShowChangeButton(false);
        } else {
          Toast.fire({
            icon: 'error',
            title: `${
              result.status === 413
                ? 'Maximum of image size is 512kb'
                : `${result.message}`
            }`,
          });
          console.log(result.status);
        }
      } else if (result.isDenied) {
      }
    });
  };

  const change = (event) => {
    // setShowChangeButton(true);
    if (event.target.files[0] !== undefined) {
      return Promise.resolve(URL.createObjectURL(event.target.files[0]));
    }
    return Promise.reject('Failure');
  };

  const trueChange = (event) => {
    let cropper;
    change(event).then(
      (url) =>
        Swal.fire({
          title: 'CROP',
          html: `<div><img id="cropperjs" src=${url}></div>`,
          willOpen: async () => {
            const image = Swal.getPopup().querySelector('#cropperjs');
            cropper = new Cropper(image, {
              aspectRatio: 1,
              viewMode: 1,
            });
          },
          preConfirm: () => {
            cropper.getCroppedCanvas().toBlob((blob) => {
              setCropped(blob);
              return blob;
            }, 'image/jpeg');

            // console.log(cropper.getCroppedCanvas().toDataURL());

            return {
              imageUrl: cropper.getCroppedCanvas().toDataURL(),
            };
          },
        }).then(async (result) => {
          console.log(result, 'and', cropped);
          if (result.isConfirmed) {
            handlerLocalUserPP(result.value.imageUrl);
            setShowChangeButton(true);
          }
        }),
      () => {
        return null;
      }
    );
  };

  return (
    <div className="w-52 rounded-2xl bg-white/80 p-2 max-lg:w-44">
      {/* <button onClick={show}>show</button> */}
      <div className="relative flex aspect-square items-center justify-center rounded-t-lg border-2 border-black-steam/50 p-2">
        <img
          src={
            !localUserPP
              ? profileImg
                ? profileImg
                : 'https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/pokemon_elements/normal.png'
              : localUserPP
          }
          alt="profile pictures"
          className={`block h-32 w-32 rounded-lg border-2 border-black-steam/50 object-contain`}
        ></img>
        {/* <div className="absolute top-0 right-0 h-full w-full bg-teal-400"></div> */}
        <div
          className="absolute right-auto bottom-0 flex w-32 flex-col pb-6.5 
        max-lg:pb-3"
        >
          <label
            className="w-full cursor-pointer rounded-b-lg border-b-2 border-r-2 border-l-2 border-black-steam/50 bg-white/80 p-1
            text-center text-sm
          text-black transition duration-300 hover:bg-orange-poke hover:text-white"
          >
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={trueChange}
              className="hidden "
            />
            <p className="max-md:text-xs">Change Picture</p>
          </label>
        </div>
      </div>
      {showChangeButton && cropped ? (
        cropped.size > 512000 ? (
          <p className="w-full border-r-2 border-l-2 border-black-steam/50 bg-red-poke p-1 text-center text-xs text-white">
            ({`${formatBytes(cropped.size)}`}) Max size (512 KB)
          </p>
        ) : (
          <button
            className="w-full border-r-2 border-l-2 border-black-steam/50 bg-gold-poke text-black
          transition duration-300 hover:bg-orange-poke hover:text-white"
            onClick={showAlert}
          >
            Change
          </button>
        )
      ) : null}
      <div
        className="overflow-hidden whitespace-nowrap rounded-b-2xl bg-black-steam p-1 text-center text-base text-white
      max-md:text-xs"
      >
        <p>{trainerName}</p>
      </div>
    </div>
  );
};

export default SettingsProfileImage;
