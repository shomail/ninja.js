import React from 'react';

import Page from './Page';

const Pagination = ({ currentPageNumber, onChange, dataLength, perPage }) => {
  const calculateTotalNumberOfPages = () => {
    if (perPage === 0) return 0;
    const pages = Math.ceil(dataLength / perPage);
    return pages;
  };

  const totalNumberOfPages = calculateTotalNumberOfPages();

  const pages = Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => {
    return (
      <Page
        key={pageNumber}
        pageNumber={pageNumber}
        isActive={pageNumber === currentPageNumber}
        handlePageChange={onChange}
      />
    );
  });

  return totalNumberOfPages > 1 ? <ul className="pagination">{pages}</ul> : null;
};

export default Pagination;
