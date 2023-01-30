import React from 'react';
import PropTypes from 'prop-types';

const CardContentUndefined = ({ id, imageUrl }) => {
  return (
    <div className="flex-row-card card-content">
      <div className={`box first-box-undefined`}>
        <img
          src={
            'https://pokecard-agas.s3.ap-southeast-1.amazonaws.com/PokeCardMaterial/quetion-mark.png'
          }
          alt="images"
        />
      </div>
    </div>
  );
};

CardContentUndefined.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CardContentUndefined;
