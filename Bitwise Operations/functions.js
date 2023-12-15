/* Функция выполняющая побитовое AND между двумя числами
Принимает два числа в качестве входного параметра.
Возвращает результат побитового AND двух чисел.
*/
const bitwiseAND = function(n1, n2) {

    // преобразование чисел из десятичного в двоичное
    let binnaryN1 = n1.toString(2);
    let binnaryN2 = n2.toString(2);

    // Функция заполняющая массив нулями до заданной длины
    function padArrayWithZeros(shortArray, targetLength) {
        let padding = new Array(targetLength - shortArray.length).fill('0');
        return padding.concat(shortArray);
    }

    // Преобразование двоичных строк в массивы
    let array1 = Array.from(binnaryN1);
    let array2 = Array.from(binnaryN2);

    // Определение максимальной длинны из двух массивов
    let maxLength = Math.max(array1.length, array2.length);

    // Заполнение массивов '0' до одинаковой длинны
    array1 = padArrayWithZeros(array1, maxLength);
    array2 = padArrayWithZeros(array2, maxLength);

    // Выполнение побитового AND и формирование результата
    const unionArray = array1.map(function(num, index) {
        return (num === array2[index] && num === '1') ? 1 : 0
    });

    // Преобразование массива обратно в десятичное число и возврат результата
    return parseInt(unionArray.join(''), 2);
}

/* Функция выполняющая побитовое OR между двумя числами
Принимает два числа в качестве входного параметра.
Возвращает результат побитового OR двух чисел.
*/
const bitwiseOR = function(n1, n2) {

    // преобразование чисел из десятичного в двоичное
    let binnaryN1 = n1.toString(2);
    let binnaryN2 = n2.toString(2);

    // Функция заполняющая массив нулями до заданной длины
    function padArrayWithZeros(shortArray, targetLength) {
        let padding = new Array(targetLength - shortArray.length).fill('0');
        return padding.concat(shortArray);
    }

    // Преобразование двоичных строк в массивы
    let array1 = Array.from(binnaryN1);
    let array2 = Array.from(binnaryN2);

    // Определение максимальной длинны из двух массивов
    let maxLength = Math.max(array1.length, array2.length);

    // Заполнение массивов '0' до одинаковой длинны
    array1 = padArrayWithZeros(array1, maxLength);
    array2 = padArrayWithZeros(array2, maxLength);

    // Выполнение побитового OR и формирование результата
    const unionArray = array1.map(function(num, index) {
        return (num === '1' || array2[index] === '1') ? 1 : 0
    });

    // Преобразование массива обратно в десятичное число и возврат результата
    return parseInt(unionArray.join(''), 2);
}


/* Функция выполняющая побитовое XOR между двумя числами
Принимает два числа в качестве входного параметра.
Возвращает результат побитового XOR двух чисел.
*/
const bitwiseXOR = function(n1, n2) {

    // преобразование чисел из десятичного в двоичное
    let binnaryN1 = n1.toString(2);
    let binnaryN2 = n2.toString(2);

    // Функция заполняющая массив нулями до заданной длины
    function padArrayWithZeros(shortArray, targetLength) {
        let padding = new Array(targetLength - shortArray.length).fill('0');
        return padding.concat(shortArray);
    }

    // Преобразование двоичных строк в массивы
    let array1 = Array.from(binnaryN1);
    let array2 = Array.from(binnaryN2);

    // Определение максимальной длинны из двух массивов
    let maxLength = Math.max(array1.length, array2.length);

    // Заполнение массивов '0' до одинаковой длинны
    array1 = padArrayWithZeros(array1, maxLength);
    array2 = padArrayWithZeros(array2, maxLength);

    // Выполнение побитового XOR и формирование результата
    const unionArray = array1.map(function(num, index) {
        return (num != array2[index]) ? 1 : 0
    })

    // Преобразование массива обратно в десятичное число и возврат результата
    return parseInt(unionArray.join(''), 2);
}

// Экспорт функций
export {
    bitwiseAND,
    bitwiseOR,
    bitwiseXOR
};