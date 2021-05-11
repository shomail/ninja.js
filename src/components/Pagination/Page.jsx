import React from 'react';

const Page = ({ pageNumber, handlePageChange, isActive }) => {
  const renderedPageNumber = () => {
    return pageNumber + 1;
  };

  return (
    <li className="page-item mr-1">
      <button
        type="button"
        className={`page-link ${isActive ? 'button-outline' : ''}`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {renderedPageNumber()}
      </button>
    </li>
  );
};

export default Page;
