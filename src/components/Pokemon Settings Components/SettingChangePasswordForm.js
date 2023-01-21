import React from 'react';
import useInput from '../../hooks/useInput';

const SettingChangePasswordForm = () => {
  const [oldPassword, handleOldPasswordChange] = useInput('');
  const [newPassword, handleNewPasswordChange] = useInput('');
  const [confirmNewPassword, handleConfirmNewPasswordChange] = useInput('');

  const matchPassword = () => {
    const match = newPassword === confirmNewPassword ? true : false;
    return match;
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-7">
        <input
          className="ml-10 rounded-md p-3 text-xs"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
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
        <input
          className="ml-10 rounded-md p-3 text-xs"
          type="password"
          placeholder="Current Password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
          required
        />
        {newPassword ? (
          matchPassword() === true ? (
            <button
              className="ml-7 animate-default_quantum_bouncing rounded-lg bg-gold-poke p-3 text-xs text-black-steam transition duration-300 
        hover:bg-orange-poke hover:text-white"
              disabled={!matchPassword()}
            >
              Change
            </button>
          ) : (
            <button
              className="ml-7 animate-default_quantum_bouncing rounded-lg bg-gold-poke p-3 text-xs text-black-steam transition duration-300 
        hover:bg-orange-poke
        disabled:bg-gray-500"
              disabled={!matchPassword()}
            >
              Password not match
            </button>
          )
        ) : null}
      </div>
    </form>
  );
};

export default SettingChangePasswordForm;
