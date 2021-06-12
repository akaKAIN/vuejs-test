import { digitDelimiterMap } from '@/filters/numberDigitsFilter';

const testTable = [
  ['convert num to str', [1, 0], '1'],
  ['convert num to str', [2, 1], '2'],
  ['convert num to str', [3, 2], '3'],
  ['convert num to str', [4, 3], '4 '],
  ['convert num to str', [5, 4], '5'],
  ['convert num to str', [6, 5], '6'],
  ['convert num to str', [7, 6], '7 '],
  ['convert num to str', [8, 7], '8'],
];

describe('digitDelimiterMap', () => {
  test.each(testTable)('%s: %p => %p', (description, inputVal, expectVal) => {
    const result = digitDelimiterMap(...inputVal);
    expect(result).toBe(expectVal);
  });
});
