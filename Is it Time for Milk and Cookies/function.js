// Функция принимающая дату в виде объекта и возращает утверждение является ли эта дата сочельником

const timeForMilkAndCookies = function(date) {
    // Сравниваем сооотетствует ли месяц и день сочельнику
    return (date.getMonth() === 11 && date.getDate() === 24) ? true : false;
}

export default timeForMilkAndCookies; // Экспорт функции