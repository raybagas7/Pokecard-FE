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
          >
            previous
          </IoArrowBackCircle>
        </div>
      ) : (
        <div className="prev-button-coat-disabled">
          <IoArrowBackCircle className="prev-button-disabled">
            previous
          </IoArrowBackCircle>
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
        <div className="next-button-coat">
          <IoArrowForwardCircle
            onClick={nextActivePage}
            className="next-button"
            disabled={false}
          >
            next
          </IoArrowForwardCircle>
        </div>
      ) : (
        <div className="next-button-coat-disabled">
          <IoArrowForwardCircle
            className="next-button-disabled"
            disabled={true}
          >
            next
          </IoArrowForwardCircle>
        </div>
      )}
      {/* <p>{array[activePage]}</p> */}
    </div>
  );
};

export default CollectionPageButton;
