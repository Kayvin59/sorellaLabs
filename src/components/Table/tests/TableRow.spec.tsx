import { fireEvent, render } from '@testing-library/react';

import { RenderRow } from '@/components/Table';

import TableRow from '../TableRow';

const row = {
  items: ['John', 30],
  url: 'https://example.com',
};

const renderRow: RenderRow = (row) => row.items;

describe('TableRow', () => {
  it('renders row data', () => {
    const { getByText } = render(<TableRow row={row} renderRow={renderRow} className='' />);

    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('30')).toBeInTheDocument();
  });

  it('renders a link if a URL is provided', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation();
    const { getByTestId } = render(<TableRow row={row} renderRow={renderRow} className='' />);

    const rowElement = getByTestId('table-row');

    fireEvent.click(rowElement);
    expect(windowOpenSpy).toHaveBeenCalledWith(row.url, '_blank');
  });

  it('does not render a link if no URL is provided', () => {
    const { getByRole } = render(<TableRow row={{ items: ['Jane', 25] }} renderRow={renderRow} className='' />);

    const rowElement = getByRole('row');
    expect(rowElement).not.toHaveAttribute('onClick');
  });

  it('renders the className passed', () => {
    const { getByRole } = render(
      <TableRow row={{ items: ['Jane', 25] }} renderRow={renderRow} className='className' />
    );

    const rowElement = getByRole('row');

    expect(rowElement).toHaveClass('className');
  });
});
