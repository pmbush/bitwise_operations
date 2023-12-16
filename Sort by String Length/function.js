// Функция принимающая массив из строк и сортирующая элементы по длине в порядке возрастания
const sortByLength = function(array) {
    // Сортируем массив по длине элементов
    return array.sort((a, b) => a.length - b.length);

}

export default sortByLength; // Экпортируем функцию