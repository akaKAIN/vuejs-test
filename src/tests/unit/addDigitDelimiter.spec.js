import { addDigitDelimiter } from '@/filters/numberDigitsFilter';

const testTable = [
  ['add delimiter', '1000', '1 000'],
  ['add delimiter', '....', '. ...'],
  ['add delimiter', '900', '900'],
  ['add delimiter', 'abcde', 'ab cde'],
  ['add delimiter', '1000000', '1 000 000'],
];

describe('addDigitDelimiter', () => {
  test.each(testTable)('%s: %p => %p', (describe, inputVal, expectedVal) => {
    const result = addDigitDelimiter(inputVal);
    expect(result).toBe(expectedVal);
  });
});
