import React from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import Swal from 'sweetalert2';
import { deleteTheOfferRefresh } from '../../utils/network-data';

const OfferDetail = ({
  offer_id,
  o_poke_id,
  o_attribute,
  o_legendary,
  o_mytchical,
  o_name,
  t_poke_id,
  t_attribute,
  t_legendary,
  t_mytchical,
  t_name,
  t_profile_img,
  t_trainer_name,
  t_search_id,
  removeOffer,
}) => {
  const splitTrainerName = t_trainer_name.split(' ');

  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const showAlert = () => {
    Swal.fire({
      title: `Cancel offer on ${t_trainer_name} for <p style="color:red; text-transform: capitalize;">${t_name}?</p>`,
      allowOutsideClick: false,
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
        const result = await deleteTheOfferRefresh({ offer_id: offer_id });
        // console.log(result);
        if (!result.error) {
          Toast.fire({
            icon: 'success',
            title: `${result.message}`,
          });
          removeOffer(offer_id);
        } else {
          Toast.fire({
            icon: 'error',
            title: `${result.message}`,
          });
        }
      } else if (result.isDenied) {
        Toast.fire({
          icon: 'info',
          title: `Your card is still offered`,
        });
      }
    });
  };

  const type = (legendary, mythical, attribute) => {
    let type = '';
    (legendary === true || mythical === true) && attribute === 'shiny'
      ? (type = 'legendary-shine')
      : (legendary === true || mythical === true) && attribute !== 'shiny'
      ? (type = 'legendary')
      : ((legendary === false || mythical === false) && attribute) === 'shiny'
      ? (type = 'shiny')
      : (legendary === false || mythical === false) && attribute === 'normal'
      ? (type = 'normal')
      : (type = undefined);
    return type;
  };

  const o_type = type(o_legendary, o_mytchical, o_attribute);
  const t_type = type(t_legendary, t_mytchical, t_attribute);
  const pokemonImage = (attribute, poke_id) => {
    if (attribute === 'shiny') {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${
        attribute === 'normal' ? '' : '/shiny'
      }/${poke_id}.png`;
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${
      attribute === 'normal' ? '' : '/shiny'
    }/${poke_id}.png`;
  };
  return (
    <div className="flex w-fit items-center gap-1 rounded-2xl bg-white/50 p-3 drop-shadow-lg">
      <div
        className={`flex h-36 w-36 flex-col items-center justify-center rounded-2xl bg-cover text-white 
        max-lg:h-20 max-lg:w-20
        ${
          o_type === undefined || null
            ? 'bg-fb-undefined'
            : o_type === 'normal'
            ? 'bg-fb-normal'
            : o_type === 'shiny'
            ? 'bg-fb-shiny'
            : o_type === 'legendary'
            ? 'bg-fb-legendary'
            : o_type === 'legendary-shine'
            ? 'bg-fb-legendary-shine'
            : ''
        }`}
      >
        <p
          className={`${
            o_type === undefined || null
              ? ''
              : `w-full rounded-t-2xl p-1 text-center text-xs first-letter:capitalize
              max-xl:p-0 max-xl:text-xxs
              max-lg:text-xxxs
              ${
                o_type === 'normal'
                  ? 'bg-red-poke'
                  : o_type === 'shiny'
                  ? 'bg-orange-400'
                  : o_type === 'legendary'
                  ? 'bg-purple-600'
                  : o_type === 'legendary-shine'
                  ? 'bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
                  : ''
              }`
          } `}
        >
          {o_name}
        </p>
        <img
          src={pokemonImage(o_attribute, o_poke_id)}
          alt="pokemon-images"
          className={`m-auto block h-8/10 w-8/10 object-contain`}
        />
      </div>
      <MdOutlineDoubleArrow className="h-5 w-5" />
      <div className="flex items-center gap-2">
        <div
          className={`flex h-36 w-36 flex-col items-center justify-center rounded-2xl bg-cover text-white  
          max-lg:h-20 max-lg:w-20 ${
            t_type === undefined || null
              ? 'bg-fb-undefined'
              : t_type === 'normal'
              ? 'bg-fb-normal'
              : t_type === 'shiny'
              ? 'bg-fb-shiny'
              : t_type === 'legendary'
              ? 'bg-fb-legendary'
              : t_type === 'legendary-shine'
              ? 'bg-fb-legendary-shine'
              : ''
          }`}
        >
          <p
            className={`${
              t_type === undefined || null
                ? ''
                : `w-full rounded-t-2xl p-1 text-center text-xs first-letter:capitalize
              max-xl:p-0 max-xl:text-xxs
              max-lg:text-xxxs
              ${
                t_type === 'normal'
                  ? 'bg-red-poke'
                  : t_type === 'shiny'
                  ? 'bg-orange-400'
                  : t_type === 'legendary'
                  ? 'bg-purple-600'
                  : t_type === 'legendary-shine'
                  ? 'bg-gradient-to-r from-purple-legend-dark via-purple-legend-light to-purple-legend-dark '
                  : ''
              }`
            } `}
          >
            {t_name}
          </p>
          <img
            src={pokemonImage(t_attribute, t_poke_id)}
            alt="pokemon-images"
            className={`m-auto block h-8/10 w-8/10 object-contain`}
          />
        </div>
        <div
          className="group/trader flex h-36 w-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-2
        max-lg:h-20 max-lg:w-14 max-lg:text-xxs"
        >
          {/* <div className="absolute h-full w-full rounded-2xl bg-black"></div> */}
          <div
            className="relative flex h-20 w-20 animate-default_hide_slide_left rounded-2xl p-1 group-hover/trader:animate-hide_slide_left
          max-lg:h-12 max-lg:w-12 max-lg:animate-default_hide_slide_left_lg max-lg:group-hover/trader:animate-hide_slide_left_lg"
          >
            <img
              className="max-w-20 aspect-square max-h-20 rounded-full object-contain p-1
              max-lg:h-10 max-lg:w-10"
              src={
                t_profile_img
                  ? t_profile_img
                  : 'https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/pokemon_elements/normal.png'
              }
              alt={t_trainer_name}
            />
            <div className="flex items-center">
              <button
                onClick={showAlert}
                className="ml-5 h-fit w-fit rounded-2xl bg-black-steam p-2 text-white transition duration-500 hover:bg-orange-poke
              max-lg:rounded-lg max-lg:p-1"
              >
                Cancel
              </button>
            </div>
          </div>
          <p>{splitTrainerName[0]}</p>
          <p>#{t_search_id}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferDetail;
