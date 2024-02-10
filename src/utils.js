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
