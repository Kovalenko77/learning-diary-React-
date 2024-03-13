import { Item } from './types';
import { Discipline } from './types/constants';

export function getCurrentDateFormatted() {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth() + 1;
  const year = todayDate.getFullYear();

  const formatedDay = day < 10 ? '0' + day : day.toString();
  const formatedMonth = month < 10 ? '0' + month : month.toString();

  var formattedDate = formatedDay + '.' + formatedMonth + '.' + year;

  return formattedDate;
}

export function calculateTotalTimeSpent(dataArray: Item[], discipline: Discipline) {
  // Используем метод reduce для свертки массива и вычисления суммы
  return dataArray.reduce((total, currentItem) => {
    // Если у текущего элемента есть свойство 'data' и 'english' внутри него
    if (currentItem.data[discipline].timeSpent) {
      // Добавляем значение свойства 'timeSpent' к общей сумме
      total += currentItem.data[discipline].timeSpent;
    }
    return total;
  }, 0);
}

export function calculateAverageTimeSpent(dataArray: Item[], discipline: Discipline) {
  const timeSpentValues = dataArray.map((item) => item.data[discipline].timeSpent);
  let averageTimeSpent = 0;
  if (timeSpentValues.length > 0) {
    averageTimeSpent = timeSpentValues.reduce((sum, value) => sum + value, 0) / timeSpentValues.length;
  }
  return averageTimeSpent;
}
