import { numberDigitsFilter } from '@/filters/numberDigitsFilter';

const testTable = [
  ['equal', '', ''],
  ['equal', 0, ''],
  ['equal', 1233, '1 233'],
  ['equal', '1000.0', '1 000'],
  ['equal', '999.990', '999.99'],
];

describe('numberDigitsFilter', () => {
  test.each(testTable)('%s: %p => %p', (description, inputVal, expectVal) => {
    const result = numberDigitsFilter(inputVal);
    expect(result).toBe(expectVal);
  });
});
