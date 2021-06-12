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
export const strToNum = (str) => {
  const clearedFromSpace = str
    .toString()
    .split('')
    .filter((unit) => unit !== ' ')
    .join('');
  return +clearedFromSpace;
};

export const numberDigitsFilter = (money) => {
  money = strToNum(money);
  return money.toString().split('.').map(addDigitDelimiter).join('.');
};
