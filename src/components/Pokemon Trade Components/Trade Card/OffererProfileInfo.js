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
  const splitTrainerName = trainerName.split(' ');
  const navigate = useNavigate();
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
    <div
      className="group/offer absolute bottom-0 mt-3 mb-3 flex h-24 w-52 animate-default_offerer_profile items-center rounded-xl bg-white text-black-steam hover:animate-expand_offerer_profile
    max-xl:animate-default_offerer_profile_xl max-xl:hover:animate-expand_offerer_profile_xl"
    >
      <img
        className="absolute m-1.5 aspect-square h-20 w-20 rounded-full object-contain p-1 group-hover/offer:animate-moving_profile_img group-hover/offer:animation-delay-500
        max-xl:h-14 max-xl:w-14 max-xl:group-hover/offer:animate-moving_profile_img_xl
        max-xl:group-hover/offer:animation-delay-500"
        src={profileImg ? profileImg : './images/pokemon_elements/normal.png'}
        alt={trainerName}
      />
      <div
        className="absolute right-0 m-1.5 flex h-20 w-28 flex-col items-center justify-center 
      group-hover/offer:animate-moving_offerer_name group-hover/offer:animation-delay-500
      max-xl:h-fit max-xl:w-fit max-xl:group-hover/offer:animate-moving_offerer_name_xl max-xl:group-hover/offer:animation-delay-500"
      >
        <p
          className="w-24 overflow-hidden text-ellipsis whitespace-nowrap text-center
        max-xl:w-16 max-xl:text-sm"
        >
          {splitTrainerName[0]}
        </p>
        <p className="max-xl:text-sm">#{searchId}</p>
      </div>
      <button
        onClick={showAlert}
        className="absolute bottom-1/4 left-1/4 hidden h-16 w-32 rounded-full bg-black-steam text-sm text-white transition duration-500 hover:bg-gold-poke hover:text-black-steam group-hover/offer:block group-hover/offer:animate-default_quantum
        max-xl:left-10 max-xl:h-fit max-xl:w-fit max-xl:p-2 max-xl:pl-4 max-xl:pr-4 max-xl:text-xs"
      >
        Accept{' '}
        <p className="first-letter:capitalize max-xl:hidden">{pokemonName}</p>
      </button>
    </div>
  );
};

export default OffererProfileInfo;
