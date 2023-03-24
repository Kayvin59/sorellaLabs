import { PAGINATION_BUTTON_COUNT } from '@/constants/env';

export const getPagesAroundPage = (rowsLength: number, rowsPerPage: number, pageNumber: number): number[] => {
  const pagesLength = Math.ceil(rowsLength / rowsPerPage);
  let lowerBound = pageNumber;
  let upperBound = pageNumber;
  let missingPages = Math.max(PAGINATION_BUTTON_COUNT, upperBound - lowerBound);

  for (let count = 0; missingPages >= 0 && upperBound - lowerBound < rowsLength && count < 3; count++) {
    let halfMissingPages = Math.ceil(missingPages / 2);

    if (lowerBound > 0) {
      lowerBound = Math.max(lowerBound - halfMissingPages, 0);
      missingPages = Math.min(PAGINATION_BUTTON_COUNT - (upperBound - lowerBound), upperBound - lowerBound);
      halfMissingPages = Math.ceil(missingPages / 2);
    }

    if (upperBound <= rowsLength) {
      upperBound = Math.min(upperBound + halfMissingPages, pagesLength - 1);
      missingPages = Math.min(PAGINATION_BUTTON_COUNT - (upperBound - lowerBound), upperBound - lowerBound);
    }
  }
  return Array.from({ length: upperBound - lowerBound + 1 }, (_, i) => lowerBound + i);
};
