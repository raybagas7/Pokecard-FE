import React from 'react';
import { GoUnverified, GoVerified } from 'react-icons/go';
import { IoCopy } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { changePasswordRefresh } from '../../utils/network-data';
import SettingChangePasswordForm from './SettingChangePasswordForm';
import SettingsProfileImage from './SettingsProfileImage';

const SettingsContainer = ({ userData }) => {
  // const splitTrainerName = userData.trainer_name.split(' ');
  const navigate = useNavigate();

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

  const onChangePassword = async ({ currentPassword, newPassword }) => {
    const { error, message } = await changePasswordRefresh({
      currentPassword,
      newPassword,
    });

    // console.log('mydata', data);
    if (!error) {
      Toast.fire({
        icon: 'success',
        title: `${message}`,
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: `${message}`,
      });
      navigate('/');
    }
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        className="rounded-2xl bg-gold-poke p-10
      max-lg:p-3"
      >
        <div
          className="flex h-fit w-720 rounded-2xl bg-white/50 p-5 drop-shadow-lg
        max-lg:p-3
        max-md:w-96 max-md:flex-col max-md:items-center max-md:gap-3"
        >
          <SettingsProfileImage
            trainerName={userData.trainer_name}
            profileImg={userData.profile_img}
          />
          <div
            className="ml-3 flex flex-1 flex-col rounded-2xl bg-white/80 text-black-steam drop-shadow-lg
          max-md:m-0"
          >
            <div
              className="relative m-2 ml-4 flex border-b-2 border-black-steam/50
            max-md:text-xs"
            >
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
              <p
                className="absolute top-0 mt-3 mb-4 text-white
              max-md:relative max-md:text-sm"
              >
                Change Password
              </p>
              <SettingChangePasswordForm onChangePassword={onChangePassword} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContainer;
