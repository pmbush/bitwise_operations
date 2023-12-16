## Сортировка по длине строки

Создайте функцию, которая возвращает массив строк, отсортированных по длине в порядке возрастания.

### Примеры

```
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ []
```

### Примечания

Строки будут иметь уникальную длину, поэтому не стоит беспокоиться о сравнении двух строк с одинаковой длиной.
Возвращает пустой массив, если входной массив пуст (см. пример #4).

Ссылка на задачу: [https://edabit.com/challenge/aNZzLBxQpidWBF26X](https://edabit.com/challenge/aNZzLBxQpidWBF26X)


### Тесты

Тесты находятся в test.js

```javascript
// Первый тест
test('["a", "ccc", "dddd", "bb"] -> ["a", "bb", "ccc", "dddd"]', () => {
    expect(sortByLength(array1)).toStrictEqual(sorted1);
});


// Второй тест
test('["may", "april", "september", "august"] -> ["may", "april", "august", "september"]', () => {
    expect(sortByLength(array2)).toStrictEqual(sorted2);
});


// Третий тест
test('["maybe"] -> ["maybe"]', () => {
    expect(sortByLength(array3)).toStrictEqual(sorted3);
});
```
