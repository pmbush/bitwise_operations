/**
 * Функция для проверки, является ли число больше или равно его перевернутому варианту.
 */
const largestSwap = function(number) {
    // Преобразуем число в строку и затем в массив символов.
    let array = Array.from(number.toString());

    // Проверяем первое число больше чем второе
    return (array[0] >= array[1]) ? true : false;

}

export default largestSwap; // экспорт функции