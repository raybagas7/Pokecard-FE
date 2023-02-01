import React from 'react';
import Swal from 'sweetalert2';
import { removeCardFromWindowRefresh } from '../../../utils/network-data';

const TradeTotalOffer = ({
  totalOffer,
  cardId,
  windowNumber,
  pokemonName,
  removeTradesCard,
}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
  });

  const showAlert = () => {
    Swal.fire({
      title: `Removing the trading card will cause all the offers on this card will be deleted <p style="color:red; text-transform: capitalize;">Remove ${pokemonName}?</p>`,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        popup: 'verification-swal',
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await removeCardFromWindowRefresh({
          card_id: cardId,
          window_number: windowNumber,
        });
        if (!result.error) {
          Toast.fire({
            icon: 'success',
            title: `${result.message}`,
          });
          removeTradesCard(windowNumber - 1);
        } else {
          Toast.fire({
            icon: 'error',
            title: `${result.message}`,
          });
        }
      } else if (result.isDenied) {
      }
    });
  };

  let free = 6 - totalOffer;

  const filledBox = [];
  for (let i = 0; i < totalOffer; i++) {
    filledBox.push(
      <div
        key={i}
        className={`relative h-3 basis-1/6 animate-bounce rounded-md bg-orange-poke max-md:animate-none`}
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
    <>
      <div className="m-1 mt-2 flex gap-1">
        {filledBox}
        {freeBox}
      </div>
      <button
        className="mt-1 rounded-lg bg-black-steam p-2 transition duration-500 hover:bg-orange-poke disabled:bg-gray-500
        max-sm:rounded-full max-sm:text-xs"
        onClick={showAlert}
        disabled={cardId === null ? true : false}
      >
        {cardId === null ? 'Empty' : 'Remove Trade'}
      </button>
    </>
  );
};

export default TradeTotalOffer;
