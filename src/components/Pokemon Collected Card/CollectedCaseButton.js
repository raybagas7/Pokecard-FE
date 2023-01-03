import React from 'react';
import Swal from 'sweetalert2';
import { updateCardToCaseRefresh } from '../../utils/network-data';

const CollectedCaseButton = ({ caseNumber, cardId, name }) => {
  const casePayload = { card_id: cardId, case_number: caseNumber };

  const updateCardCase = async (payload) => {
    try {
      await updateCardToCaseRefresh(payload).then(
        ({ error, data, message }) => {
          console.log(message);
        }
      );
    } catch (e) {
      console.log(e);
    }
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
        await updateCardCase(casePayload);
        Swal.fire('Success, check your profile page', '', 'success');
      } else if (result.isDenied) {
      }
    });
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <button
        onClick={showAlert}
        className={`absolute rounded-lg bg-black-steam p-2 text-sm text-white transition hover:scale-125 hover:bg-orange-poke 
        max-tablet:p-1 max-tablet:text-xxs`}
      >
        Case {caseNumber}
      </button>
    </div>
  );
};

export default CollectedCaseButton;
