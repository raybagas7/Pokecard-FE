import React from 'react';

const CollectedPokemonMove = ({ move }) => {
  return (
    <div className="move-small-container_collected">
      <div
        className={`move-identifier_collected ailment-${move.ailment}_collected`}
      >
        <p className="move-id_collected">#{move.id}</p>
        <p
          className={`move-ailment_collected ailment-text-${move.ailment}_collected`}
        >
          {move.ailment ? move.ailment : 'null'}
        </p>
      </div>
      <div className={`move-core_collected move-type-${move.type}`}>
        <div className="move-element_collected">
          <img
            src={`https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/pokemon_elements/${move.type}.png`}
            alt="snoop"
          />
        </div>
        <p className="move-name_collected">{move.name}</p>
      </div>
      <div className="move-detail_collected">
        <p className="move-power_collected">{move.power ? move.power : '-'}</p>
        <p className="move-accuracy_collected">
          {move.accuracy ? move.accuracy : '-'}
        </p>
        <p className="move-pp_collected">{move.pp ? move.pp : '-'}</p>
      </div>
    </div>
  );
};

export default CollectedPokemonMove;
