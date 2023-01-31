import React from 'react';
import SettingsContainer from '../components/Pokemon Settings Components/SettingsContainer';

const SettingPage = ({ userData }) => {
  // console.log('setting', userData);
  return (
    <div>
      <div>
        <SettingsContainer userData={userData} />
      </div>
    </div>
  );
};

export default SettingPage;
