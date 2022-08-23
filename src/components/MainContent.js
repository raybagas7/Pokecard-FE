import React from 'react';
import ContainerContent from './ContainerContent';

const MainContent = ({ cards }) => {
  return (
    <div className="main-content">
      <ContainerContent cards={cards} />
    </div>
  );
};

export default MainContent;
