/**  
 * Функция сортировки цены по возрастанию с использованием стандартного метода сортировки
 * Входящий параметр массив
 **/
const sortDrinkByPrice = function(drinks) {
    // сортировка входящего массива по элементу price по возрастанию
    return drinks.sort((a, b) => a.price - b.price);

}




/**  
 * Функция сортировки цены по возрастанию с использованием сортировки пузырьком
 * Входящий параметр массив

*/
const sortDrinkByByble = function(drinks) {
    // Получаем длину массива
    let n = drinks.length;
    // Внешний цикл управляет количеством проходов по массиву
    for (let i = 0; i < n - 1; i++) {
        // Внутренний цикл проходит по массиву для сравнения соседних элементов
        for (let j = 0; j < n - i - 1; j++) {
            // Сравниваем цены соседних напитков
            if (drinks[j].price > drinks[j + 1].price) {
                // Меняем элементы местами
                [drinks[j], drinks[j + 1]] = [drinks[j + 1], drinks[j]];
            }
        }

    }

    return drinks;
}


export { sortDrinkByPrice, sortDrinkByByble }; // экспорт функций