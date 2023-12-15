## Сортировка напитков

Вам будет дан массив напитков, каждый из которых является объектом с двумя свойствами: названием и ценой. Создайте функцию, аргументом которой будет массив напитков, и верните объекты напитков, отсортированные по цене в порядке возрастания. Должно быть 2 решения: реализация с помощью встроенного в язык метода сортировки и сортировка пузырьком.

Предположим, что необходимо отсортировать следующий массив объектов напитков:

```javascript
drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
```

Вывод отсортированного объекта drinks будет таким:

```javascript
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
```

Ссылка на задачу: [https://edabit.com/challenge/nuXdWHAoHv9y38sn7](https://edabit.com/challenge/nuXdWHAoHv9y38sn7)



### Тесты

Тесты находятся в test.js

// Первый тест
test('sortDrinkByPrice drinks1 = sorted1', () => {
    expect(sortDrinkByPrice(drinks1)).toStrictEqual(sorted1);
});

test('sortDrinkByByble drinks1 = sorted1', () => {
    expect(sortDrinkByByble(drinks1)).toStrictEqual(sorted1);
});


// Второй тест
test('sortDrinkByPrice drinks1 = sorted1', () => {
    expect(sortDrinkByPrice(drinks2)).toStrictEqual(sorted2);
});

test('sortDrinkByByble drinks1 = sorted1', () => {
    expect(sortDrinkByByble(drinks2)).toStrictEqual(sorted2);
});
