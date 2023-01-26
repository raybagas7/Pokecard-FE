import React from 'react';

const CollectionTab = ({ activePage, indexPage, jumpActivePage }) => {
  //   const { activePage, jumpActivePage } = changePage;
  //   console.log(activePage, indexPage, 'haha');

  const change = () => {
    jumpActivePage(indexPage);
  };

  // console.log('me', indexPage);
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
