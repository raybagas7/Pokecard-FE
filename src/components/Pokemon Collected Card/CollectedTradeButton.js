import React from 'react';
import Swal from 'sweetalert2';
import { updateCardToWindowRefresh } from '../../utils/network-data';

const CollectedTradeButton = ({ windowNumber, cardId, name }) => {
  const tradesPayload = { card_id: cardId, window_number: windowNumber };

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

  const updateCardWindow = async (payload) => {
    const result = await updateCardToWindowRefresh(payload).then(
      ({ error, data, message }) => {
        return { error, message };
      }
    );
    return result;
  };

  const showAlert = () => {
    Swal.fire({
      title: `Set ${name} into trades window number #${windowNumber}?`,
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
        const result = await updateCardWindow(tradesPayload);
        // console.log(result);
        if (!result.error) {
          Toast.fire({
            icon: 'success',
            title: `${result.message}`,
          });
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
  return (
    <div className="flex flex-1 items-center justify-center">
      <button
        onClick={showAlert}
        className={`absolute text-ellipsis rounded-lg bg-black-steam p-1.5 text-xxs text-white transition hover:scale-125 
        hover:bg-orange-poke max-tablet:overflow-hidden max-tablet:whitespace-nowrap max-tablet:p-1 max-tablet:text-xxxs`}
      >
        Trade {windowNumber}
      </button>
    </div>
  );
};

export default CollectedTradeButton;
