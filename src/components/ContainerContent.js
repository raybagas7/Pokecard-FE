import React from 'react';
import CardContent from './CardContent';

const ContainerContent = ({ cards }) => {
  return (
    <div className="flex-column container-content__first">
      {cards.map((card) => (
        <CardContent key={card.id} {...card} />
      ))}
    </div>
  );
};

export default ContainerContent;
