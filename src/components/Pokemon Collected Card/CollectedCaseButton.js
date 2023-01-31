import React from 'react';
import Swal from 'sweetalert2';
import { updateCardToCaseRefresh } from '../../utils/network-data';

const CollectedCaseButton = ({ caseNumber, cardId, name }) => {
  const casePayload = { card_id: cardId, case_number: caseNumber };

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

  const updateCardCase = async (payload) => {
    const result = await updateCardToCaseRefresh(payload).then(
      ({ error, data, message }) => {
        // console.log(message);
        return { error, message };
      }
    );
    return result;
  };

  const showAlert = () => {
    Swal.fire({
      title: `Set ${name} into showcase number #${caseNumber}?`,
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
        const result = await updateCardCase(casePayload);
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
        className={`absolute rounded-lg bg-black-steam p-1.5 text-xxs text-white transition hover:scale-125 hover:bg-orange-poke 
        max-tablet:p-1 max-tablet:text-xxxs`}
      >
        Case {caseNumber}
      </button>
    </div>
  );
};

export default CollectedCaseButton;
