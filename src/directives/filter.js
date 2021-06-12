import { numberDigitsFilter } from '@/filters/numberDigitsFilter';

// Директива для очистки значения от всего, что не попадает в переданный паттерн для регулярного выражения.
// Запятая меняется на точку.
export const filterDirective = {
  update: (el, binding) => {
    // инициация паттерна регулярного выражения
    const re = new RegExp(binding.value, 'g');

    // замена запятой в строке на точку
    const dotReplaced = el.value.replace(',', '.');

    // получение строки из массива совпадений по шаблону
    const matchStr = dotReplaced.match(re) ? dotReplaced.match(re).join('') : '';

    // сохранение в элементе форматированной строки
    if (matchStr.includes('.')) {
      el.value = matchStr.split('.').map(numberDigitsFilter).join('.');
    } else {
      el.value = numberDigitsFilter(matchStr);
    }
  },
};
