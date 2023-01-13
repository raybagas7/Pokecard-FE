import React from 'react';

const TradeTotalOffer = ({ total_offer }) => {
  //   console.log(total_offer);
  let free = 6 - total_offer;

  const filledBox = [];
  for (let i = 0; i < total_offer; i++) {
    filledBox.push(
      <div
        key={i}
        className={`relative h-3 basis-1/6 animate-bounce rounded-md bg-orange-poke`}
      ></div>
    );
  }
  const freeBox = [];
  for (let i = 0; i < free; i++) {
    freeBox.push(
      <div key={i} className="h-3 basis-1/6 rounded-md bg-black-steam/50"></div>
    );
  }

  return (
    <div className="m-1 mt-2 flex gap-1">
      {filledBox}
      {freeBox}
    </div>
  );
};

export default TradeTotalOffer;
