import { getPagesAroundPage } from '../utils';

describe('getPagesAroundPage', () => {
  it('should return the correct page numbers for the first page', () => {
    const rowsLength = 50;
    const rowsPerPage = 10;
    const pageNumber = 0;
    const expected = [0, 1, 2, 3, 4];
    const result = getPagesAroundPage(rowsLength, rowsPerPage, pageNumber);
    expect(result).toEqual(expected);
  });

  it('should return the correct page numbers for the last page', () => {
    const rowsLength = 50;
    const rowsPerPage = 10;
    const pageNumber = 4;
    const expected = [0, 1, 2, 3, 4];
    const result = getPagesAroundPage(rowsLength, rowsPerPage, pageNumber);
    expect(result).toEqual(expected);
  });

  it('should return the correct page numbers for a page in the middle', () => {
    const rowsLength = 50;
    const rowsPerPage = 10;
    const pageNumber = 2;
    const expected = [0, 1, 2, 3, 4];
    const result = getPagesAroundPage(rowsLength, rowsPerPage, pageNumber);
    expect(result).toEqual(expected);
  });

  it('should return fewer page numbers when rowsLength is less than PAGINATION_BUTTON_COUNT', () => {
    const rowsLength = 5;
    const rowsPerPage = 10;
    const pageNumber = 0;
    const expected = [0];
    const result = getPagesAroundPage(rowsLength, rowsPerPage, pageNumber);
    expect(result).toEqual(expected);
  });

  it('should return fewer page numbers when rowsLength is close to the first page', () => {
    const rowsLength = 25;
    const rowsPerPage = 10;
    const pageNumber = 0;
    const expected = [0, 1, 2];
    const result = getPagesAroundPage(rowsLength, rowsPerPage, pageNumber);
    expect(result).toEqual(expected);
  });

  it('should return fewer page numbers when rowsLength is close to the last page', () => {
    const rowsLength = 35;
    const rowsPerPage = 10;
    const pageNumber = 3;
    const expected = [0, 1, 2, 3];
    const result = getPagesAroundPage(rowsLength, rowsPerPage, pageNumber);
    expect(result).toEqual(expected);
  });

  it('should return fewer page numbers when PAGINATION_BUTTON_COUNT is larger than rowsLength', () => {
    const rowsLength = 5;
    const rowsPerPage = 10;
    const pageNumber = 0;
    const expected = [0];
    const result = getPagesAroundPage(rowsLength, rowsPerPage, pageNumber);
    expect(result).toEqual(expected);
  });
});
