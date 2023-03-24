import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Table, { RenderRow, Row } from '../index';

describe('Table component', () => {
  const header: Row = { items: ['Name', 'Age'] };
  const rows: Row[] = [
    { items: ['John', 80] },
    { items: ['Jane', 65] },
    { items: ['Bob', 40] },
    { items: ['Alice', 68] },
  ];
  const emptyRowMessage = 'No data available';
  const rowsPerPage = 4;
  const renderRow: RenderRow = (row: Row) => row.items.map((item, i) => <div key={i}>{item}</div>);
  const renderHeader: RenderRow = (row: Row) =>
    row.items.map((item, i) => (
      <div data-testid='header' key={i}>
        {item}
      </div>
    ));
  const isLoading = false;
  const defaultProps = { headerClassName: '', rowClassName: '', tableClassName: '' };

  it('renders header', () => {
    const { getAllByTestId } = render(
      <Table
        header={header}
        rows={[]}
        emptyRowMessage={emptyRowMessage}
        rowsPerPage={rowsPerPage}
        renderRow={renderRow}
        renderHeader={renderHeader}
        isLoading={isLoading}
        {...defaultProps}
      />
    );

    expect(getAllByTestId('header')).toHaveLength(2);
  });

  it('renders table header and rows', () => {
    const { getByText } = render(
      <Table
        header={header}
        rows={rows}
        emptyRowMessage={emptyRowMessage}
        rowsPerPage={rowsPerPage}
        renderRow={renderRow}
        renderHeader={renderHeader}
        isLoading={isLoading}
        {...defaultProps}
      />
    );

    // Check table header
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();

    // Check table rows
    expect(getByText('John')).toBeInTheDocument();
    expect(getByText('80')).toBeInTheDocument();
    expect(getByText('Jane')).toBeInTheDocument();
    expect(getByText('65')).toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
    expect(getByText('40')).toBeInTheDocument();
    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('68')).toBeInTheDocument();
  });

  it('renders empty row message when no rows are available', () => {
    const { getByText } = render(
      <Table
        header={header}
        rows={[]}
        emptyRowMessage={emptyRowMessage}
        rowsPerPage={rowsPerPage}
        renderHeader={renderHeader}
        renderRow={renderRow}
        isLoading={isLoading}
        {...defaultProps}
      />
    );

    expect(getByText('No data available')).toBeInTheDocument();
  });

  it('renders loading indicator when isLoading is true', () => {
    const { getByTestId } = render(
      <Table
        header={header}
        rows={rows}
        emptyRowMessage={emptyRowMessage}
        rowsPerPage={rowsPerPage}
        renderRow={renderHeader}
        renderHeader={renderRow}
        isLoading={true}
        {...defaultProps}
      />
    );

    expect(getByTestId('loading-icon')).toBeInTheDocument();
  });

  it('navigates to the next page when the next page button is clicked', async () => {
    const { getByTestId, getByText, queryByText } = render(
      <Table
        header={header}
        rows={rows}
        emptyRowMessage={emptyRowMessage}
        rowsPerPage={2}
        renderRow={renderRow}
        renderHeader={renderHeader}
        isLoading={isLoading}
        {...defaultProps}
      />
    );

    await userEvent.click(getByTestId('pagination-button-1'));

    // Check that the table shows the correct rows on the next page
    expect(queryByText('John')).not.toBeInTheDocument();
    expect(queryByText('80')).not.toBeInTheDocument();
    expect(queryByText('Jane')).not.toBeInTheDocument();
    expect(queryByText('25')).not.toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
    expect(getByText('40')).toBeInTheDocument();
    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('68')).toBeInTheDocument();
  });
});
