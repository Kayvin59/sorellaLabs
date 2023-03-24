import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import TablePaginationButtons from '../TablePaginationButton';

describe('TablePaginationButton', () => {
  const setPageNumber = jest.fn();
  const defaultProps = {
    pageNumber: 1,
    isCurrentPageNumber: false,
    setCurrentPageNumber: setPageNumber,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page number', () => {
    const { getByText } = render(<TablePaginationButtons {...defaultProps} />);
    expect(getByText('2')).toBeInTheDocument();
  });

  it('applies the correct class to the button when it is the current page', () => {
    const { getByText } = render(<TablePaginationButtons {...defaultProps} isCurrentPageNumber={true} />);
    const button = getByText('2');
    expect(button).toHaveClass('bg-white/20');
    expect(button).not.toHaveClass('cursor-pointer text-white/60');
  });

  it('applies the correct class to the button when it is not the current page', () => {
    const { getByText } = render(<TablePaginationButtons {...defaultProps} />);
    const button = getByText('2');
    expect(button).toHaveClass('cursor-pointer text-white/60');
    expect(button).not.toHaveClass('bg-white/20');
  });

  it('calls setCurrentPageNumber when clicked', () => {
    const { getByText } = render(<TablePaginationButtons {...defaultProps} />);
    const button = getByText('2');
    fireEvent.click(button);
    expect(setPageNumber).toHaveBeenCalledWith(1);
  });
});
