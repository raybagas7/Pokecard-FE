import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const SettingChangePasswordForm = (props) => {
  const [currentPassword, handleCurrentPasswordChange] = useInput('');
  const [newPassword, handleNewPasswordChange] = useInput('');
  const [confirmNewPassword, handleConfirmNewPasswordChange] = useInput('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const onSubmitChangePassHandler = (event) => {
    event.preventDefault();

    props.onChangePassword({
      currentPassword,
      newPassword,
    });
  };

  const passwordStrenght = (password) => {
    let i = 0;
    if (password.length >= 4) {
      i++;
    }
    if (password.length >= 8) {
      i++;
    }
    if (password.length >= 10) {
      i++;
    }
    if (/[A - Z]/.test(password)) {
      i++;
    }
    if (/[1 - 9]/.test(password)) {
      i++;
    }
    if (/[A-Za-z0-3]/.test(password)) {
      i++;
    }
    return i;
  };

  let newPasswordStrenght = passwordStrenght(newPassword);

  const toggleShowNew = () => {
    const temp = showNewPassword;
    setShowNewPassword(!temp);
  };

  const toggleShowCurrent = () => {
    const temp = showCurrentPassword;
    setShowCurrentPassword(!temp);
  };

  const matchPassword = () => {
    const match = newPassword === confirmNewPassword ? true : false;
    return match;
  };

  return (
    <form onSubmit={onSubmitChangePassHandler} className="flex flex-col gap-2">
      <div className="flex gap-7">
        <div className="flex">
          <input
            className={`ml-10 rounded-l-md border-2 border-white p-3 text-xs focus:outline-none
            ${
              newPasswordStrenght <= 2 && newPasswordStrenght > 0
                ? 'border-red-poke shadow shadow-red-poke'
                : newPasswordStrenght >= 2 && newPasswordStrenght <= 4
                ? 'border-gold-poke shadow shadow-gold-poke'
                : newPasswordStrenght > 4
                ? 'border-green-400 shadow shadow-green-400'
                : 'border-white'
            }`}
            type={showNewPassword ? 'text' : 'password'}
            placeholder="New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
          <div
            onClick={toggleShowNew}
            className="group/show1 flex cursor-pointer items-center rounded-r-md border-l-2 border-black-steam bg-white p-1 
          transition duration-300 hover:bg-black-steam"
          >
            {showNewPassword ? (
              <FaEye className="text-black-steam transition duration-300 group-hover/show1:text-orange-poke" />
            ) : (
              <FaEyeSlash className="text-black-steam transition duration-300 group-hover/show1:text-orange-poke" />
            )}
          </div>
        </div>
        <input
          className="mr-10 rounded-md p-3 text-xs"
          type="password"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={handleConfirmNewPasswordChange}
          required
        />
      </div>
      <div className="flex">
        <div className="flex">
          <input
            className={`ml-10 rounded-l-md border-2 border-white p-3 text-xs`}
            type={showCurrentPassword ? 'text' : 'password'}
            placeholder="Current Password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            required
          />
          <div
            onClick={toggleShowCurrent}
            className="group/show2 flex cursor-pointer items-center rounded-r-md border-l-2 border-black-steam bg-white p-1 
            transition duration-300 hover:bg-black-steam"
          >
            {showCurrentPassword ? (
              <FaEye className="text-black-steam transition duration-300 group-hover/show2:text-orange-poke" />
            ) : (
              <FaEyeSlash className="text-black-steam transition duration-300 group-hover/show2:text-orange-poke" />
            )}
          </div>
        </div>
        {newPassword ? (
          newPassword.length < 8 || currentPassword.length < 8 ? (
            <button
              className="ml-7 animate-default_quantum_bouncing rounded-lg p-3 text-xs text-black-steam 
              transition duration-300 disabled:bg-gray-500"
              disabled={true}
            >
              Old/New Pass Too Short
            </button>
          ) : matchPassword() === true ? (
            <button
              className="ml-7 animate-default_quantum_bouncing rounded-lg bg-gold-poke p-3 text-xs text-black-steam transition duration-300 
        hover:bg-orange-poke hover:text-white"
              disabled={!matchPassword()}
            >
              Change
            </button>
          ) : (
            <button
              className="ml-7 animate-default_quantum_bouncing rounded-lg p-3 text-xs text-black-steam
              transition duration-300 disabled:bg-gray-500"
              disabled={!matchPassword()}
            >
              New pass not match
            </button>
          )
        ) : null}
      </div>
    </form>
  );
};

export default SettingChangePasswordForm;
