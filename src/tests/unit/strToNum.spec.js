import { strToNum } from '@/filters/numberDigitsFilter';

const testTable = [
  ['str to num', '', 0],
  ['str to num', '10 000', 10000],
  ['str to num', '100', 100],
  ['str to num', '1', 1],
  ['str to num', '10 000 000', 10000000],
  ['str to num', '10 000.12', 10000.12],
];

describe('strToNum', () => {
  test.each(testTable)('%s: %p => %p', (description, inputVal, expectVal) => {
    const result = strToNum(inputVal);
    expect(result).toBe(expectVal);
  });
});
