import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import PopUpWrapper from '../PopUpWrapper';

const mockOnClose = jest.fn();
const mockChildren = <div>Test Content</div>;

describe('PopUpWrapper', () => {
  test('renders the component with children', () => {
    render(
      <PopUpWrapper show={true} onClose={mockOnClose}>
        {mockChildren}
      </PopUpWrapper>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('calls onClose on Close button click', () => {
    render(
      <PopUpWrapper show={true} onClose={mockOnClose}>
        {mockChildren}
      </PopUpWrapper>
    );
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  // TODO: fix this test
  xtest('toggles visibility based on show prop', async () => {
    const { rerender } = render(
      <PopUpWrapper show={false} onClose={mockOnClose}>
        {mockChildren}
      </PopUpWrapper>
    );
    const wrapper = screen.getByTestId('popup-wrapper');
    expect(wrapper).toHaveStyle('display: none');

    rerender(
      <PopUpWrapper show={true} onClose={mockOnClose}>
        {mockChildren}
      </PopUpWrapper>
    );
    // Allow time for the anime.js transition to complete
    await act(() => new Promise((resolve) => setTimeout(resolve, 500)));
    expect(wrapper).toHaveStyle('display: flex');
  });
});
