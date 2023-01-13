import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { acceptTheOfferRefresh } from '../../../utils/network-data';

const OffererProfileInfo = ({
  trainerName,
  searchId,
  profileImg,
  pokemonName,
  offerId,
}) => {
  const navigate = useNavigate();
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
      title: `Accept the offer from ${trainerName} (${pokemonName})?`,
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
        const result = await acceptTheOfferRefresh({ offer_id: offerId });
        // console.log(result);
        if (!result.error) {
          Toast.fire({
            icon: 'success',
            title: `${result.message}`,
          });
          navigate('/trades');
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
  //group-hover/offer:animate-moving_brutally
  return (
    <div className="group/offer absolute bottom-0 mt-3 mb-3 flex h-24 w-52 animate-default_offerer_profile items-center rounded-xl bg-white text-black-steam hover:animate-expand_offerer_profile ">
      <img
        className="absolute m-1.5 max-h-20 w-auto p-1 group-hover/offer:animate-moving_profile_img group-hover/offer:animation-delay-500"
        src={`./images/pokemon_elements/normal.png`}
        alt={trainerName}
      />
      <div
        className="absolute right-0 m-1.5 flex h-20 w-28 flex-col items-center justify-center 
      group-hover/offer:animate-moving_offerer_name group-hover/offer:animation-delay-500"
      >
        <p className="w-24 overflow-hidden text-ellipsis whitespace-nowrap text-center">
          {trainerName}
        </p>
        <p>#{searchId}</p>
      </div>
      <button
        onClick={showAlert}
        className="absolute bottom-1/4 left-1/4 hidden h-16 w-32 rounded-full bg-black-steam text-sm text-white transition duration-500 hover:bg-gold-poke hover:text-black-steam group-hover/offer:block group-hover/offer:animate-default_quantum"
      >
        Accept <p className="first-letter:capitalize">{pokemonName}</p>
      </button>
    </div>
  );
};

export default OffererProfileInfo;
