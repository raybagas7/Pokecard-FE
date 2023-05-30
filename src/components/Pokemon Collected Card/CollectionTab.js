import React from 'react';

const CollectionTab = ({ activePage, indexPage, jumpActivePage }) => {
  const change = () => {
    jumpActivePage(indexPage);
  };

  return (
    <>
      <button
        onClick={change}
        className={`page-button text-xs ${
          activePage === indexPage ? 'page-active' : ''
        }`}
      >
        {indexPage + 1}{' '}
      </button>
    </>
  );
};

export default CollectionTab;
