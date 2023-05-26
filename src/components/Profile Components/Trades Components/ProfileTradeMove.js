import React from 'react';
import { elementUrl } from '../../../utils/element';

const ProfileTradeMove = ({ move }) => {
  return (
    <div className="relative flex h-6/10 w-full flex-col rounded-md bg-white">
      <div
        className={`flex items-center justify-between rounded-t-md p-0.5 text-xxs
        max-xl:text-xxxs
      ailment-${move !== null ? move.ailment : 'none'}`}
      >
        <p className={`indent-1 before:content-['#']`}>
          {move !== null ? move.id : null}
        </p>
        <div>
          <div
            className="max-w-60px overflow-hidden text-ellipsis whitespace-nowrap
          max-xl:max-w-20px"
          >
            <p className="pr-1 first-letter:capitalize">
              {move !== null ? move.ailment : 'none'}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-1 items-center justify-center max-xl:p-1
      ${move !== null ? `move-type-${move.type}` : 'bg-gray-500'}`}
      >
        <img
          src={
            move !== null
              ? elementUrl
                  .filter(
                    (chosenElement) =>
                      chosenElement.id.toLowerCase() === move.type.toLowerCase()
                  )
                  .map((chosenElement) => chosenElement.imageUrl)
              : 'https://firebasestorage.googleapis.com/v0/b/pokecard-agas.appspot.com/o/misc%2Fquetion-mark.png?alt=media&token=225670ea-f313-4abe-9e19-788f6bf619f8'
          }
          className={`h-4 w-4 
          max-xl:h-3 max-xl:w-3 
          ${move !== null ? 'rounded-full border border-white' : ''} `}
          alt={`${move !== null ? move : ''}`}
        />
        <div
          className="max-w-60px
        max-xl:max-w-40px max-xl:overflow-hidden max-xl:text-ellipsis max-xl:whitespace-nowrap"
        >
          <p
            className="ml-1 text-xxs first-letter:capitalize
          max-xl:text-xxxs"
          >
            {move !== null ? move.name : ''}
          </p>
        </div>
      </div>
      <div className="bottom-0 flex w-full rounded-b-md text-xxs max-xl:text-xxxs">
        <div className="flex-1 rounded-bl-md bg-red-poke p-0.5 text-center">
          {move.power !== null ? move.power : '-'}
        </div>
        <div className="flex-1 bg-amber-400 p-0.5  text-center">
          {' '}
          {move.accuracy !== null ? move.accuracy : '-'}
        </div>
        <div className="flex-1 rounded-br-md bg-blue-500 p-0.5  text-center">
          {move.pp !== null ? move.pp : '-'}
        </div>
      </div>
    </div>
  );
};

export default ProfileTradeMove;
