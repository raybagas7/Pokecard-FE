import React from 'react';
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';
import CollectionTab from './CollectionTab';

const CollectionPageButton = ({
  array,
  activePage,
  nextActivePage,
  previousActivePage,
  jumpActivePage,
}) => {
  return (
    <div className="pages">
      {activePage !== 0 ? (
        <div className="prev-button-coat">
          <IoArrowBackCircle
            onClick={previousActivePage}
            className="prev-button"
          ></IoArrowBackCircle>
        </div>
      ) : (
        <div className="prev-button-coat-disabled">
          <IoArrowBackCircle className="prev-button-disabled"></IoArrowBackCircle>
        </div>
      )}
      {array
        ? array.map((item, index) => (
            <CollectionTab
              slide={item}
              activePage={activePage}
              indexPage={index}
              jumpActivePage={jumpActivePage}
              key={index}
            />
          ))
        : null}
      {activePage <= array.length - 2 ? (
        <div className="next-button-coat flex items-center">
          <IoArrowForwardCircle
            onClick={nextActivePage}
            className="next-button"
            disabled={false}
          ></IoArrowForwardCircle>
        </div>
      ) : (
        <div className="next-button-coat-disabled flex items-center">
          <IoArrowForwardCircle
            className="next-button-disabled"
            disabled={true}
          ></IoArrowForwardCircle>
        </div>
      )}
      {/* <p>{array[activePage]}</p> */}
    </div>
  );
};

export default CollectionPageButton;
