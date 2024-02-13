export function getCurrentDateFormatted() {
    var todayDate = new Date();
    var day = todayDate.getDate();
    var month = todayDate.getMonth() + 1;
    var year = todayDate.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    var formattedDate = day + '.' + month + '.' + year;

    return formattedDate;
}

export function calculateTotalTimeSpent(dataArray, discipline) {
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

export function calculateAverageTimeSpent(dataArray, discipline) {
    const timeSpentValues = dataArray.map((item) => item.data[discipline].timeSpent);
    let averageTimeSpent = 0;
    if (timeSpentValues.length > 0) {
        averageTimeSpent = timeSpentValues.reduce((sum, value) => sum + value, 0) / timeSpentValues.length;
    }
    return averageTimeSpent;
}
