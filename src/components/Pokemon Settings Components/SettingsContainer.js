import React from 'react';
import { GoUnverified, GoVerified } from 'react-icons/go';
import { IoCopy } from 'react-icons/io5';
import Swal from 'sweetalert2';
import SettingChangePasswordForm from './SettingChangePasswordForm';

const SettingsContainer = ({ userData }) => {
  const splitTrainerName = userData.trainer_name.split(' ');

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
    navigator.clipboard.writeText(userData.search_id);
    Toast.fire({
      icon: 'success',
      title: `Search Id Copied`,
    });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="rounded-2xl bg-gold-poke p-10">
        <div className="flex h-fit w-720 rounded-2xl bg-white/50 p-5 drop-shadow-lg">
          <div className="w-52 rounded-2xl bg-white/80 p-2">
            <div className="rounded-t-lg border-2 border-black-steam/50 p-3">
              <img
                src="./images/snoop.jpg"
                alt="profile pictures"
                className={`block h-auto w-full rounded-lg  object-contain `}
              ></img>
            </div>
            <div className="overflow-hidden whitespace-nowrap rounded-b-2xl bg-black-steam p-1 text-center text-base text-white">
              <p>{splitTrainerName[0]}</p>
            </div>
          </div>
          <div className="ml-3 flex flex-1 flex-col rounded-2xl bg-white/80 text-black-steam drop-shadow-lg">
            <div className="relative m-2 ml-4 flex border-b-2 border-black-steam/50">
              <div className="flex items-center">
                <p className="indent-3">@{userData.username}</p>
                {userData.is_valid ? (
                  <GoVerified
                    className="ml-1 text-orange-poke"
                    title="Verified"
                  />
                ) : (
                  <GoUnverified
                    className="ml-1 text-black-steam"
                    title="Unverified"
                  />
                )}
              </div>
              <div className="absolute right-0 mr-4 flex items-center text-black-steam">
                Friend Id
                <IoCopy
                  className="ml-2 cursor-pointer hover:text-orange-poke"
                  onClick={showAlert}
                />
                <p>{userData.search_id}</p>
              </div>
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center rounded-b-2xl bg-black-steam">
              <p className="absolute top-0 mt-4 text-white">Change Password</p>
              <SettingChangePasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContainer;
