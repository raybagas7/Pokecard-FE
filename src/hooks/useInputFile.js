import React from 'react';

const useInputFile = (defaultValue) => {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => setValue(event.target.files[0]);
  return [value, handleValueChange];
};

export default useInputFile;
