import React from 'react';

interface Props {
  pageNumber: number;
  isCurrentPageNumber: boolean;
  setCurrentPageNumber: (currentPageNumber: number) => void;
}

const TablePaginationButton = (props: Props) => {
  const { pageNumber, isCurrentPageNumber, setCurrentPageNumber } = props;

  return (
    <button
      data-testid={`pagination-button-${pageNumber}`}
      onClick={() => setCurrentPageNumber(pageNumber)}
      className={`mx-1 rounded-md text-xs ${
        isCurrentPageNumber ? 'bg-white/20' : 'cursor-pointer'
      } px-3 py-1.5 text-white/60 hover:bg-white/40`}
    >
      {pageNumber + 1}
    </button>
  );
};

export default TablePaginationButton;
