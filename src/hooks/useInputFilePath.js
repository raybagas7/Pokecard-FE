import React from 'react';

const useInputFilePath = (defaultValue) => {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) =>
    event
      ? setValue(URL.createObjectURL(event.target.files[0]))
      : setValue(null);
  return [value, handleValueChange];
};

export default useInputFilePath;
