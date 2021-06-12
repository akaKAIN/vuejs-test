// Функция для добавления пробелов после каждого 3-го символа
export const digitDelimiterMap = (unit, idx) => {
  if (idx && idx % 3 === 0) {
    return `${unit} `;
  }
  return unit.toString();
};

// Функция добавления разделителя разрядов в переданную строку
export const addDigitDelimiter = (num) => {
  return num
    .split('')
    .reverse()
    .map(digitDelimiterMap)
    .reverse()
    .join('');
};

// Функция преобразования string -> number
export const strToNum = (str, pattern = null) => {
  if (pattern && str) {
    const re = new RegExp(pattern, 'g');
    const matches = str.toString().match(re);
    str = matches ? matches.join('') : '';
  }
  const clearedFromSpace = str
    .toString()
    .split('')
    .filter((unit) => unit !== ' ')
    .join('')
    .split('.')
    .slice(0, 2)
    .join('.');
  return +clearedFromSpace;
};

export const numberDigitsFilter = (money) => {
  money = strToNum(money);
  if (!money) {
    return '';
  }
  return money
    .toString()
    .split('.')
    .slice(0, 2)
    .map(addDigitDelimiter)
    .join('.');
};
