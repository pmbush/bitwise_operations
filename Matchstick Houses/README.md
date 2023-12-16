## Дома из спичек

Эта задача поможет вам интерпретировать математические отношения как алгебраически, так и геометрически.

![Дома из спичек](https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png)

Создайте функцию, которая принимает в качестве аргумента число (шаг) и возвращает количество спичечных палочек в этом шаге. Смотрите шаги 1, 2 и 3 на изображении выше.


```
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436
```

### Примечания

Шаг 0 возвращает 0 спичек.
Вход (шаг) всегда будет неотрицательным целым числом.
Считайте, что вход (шаг) - это общее количество домов, которые были соединены вместе.

Ссылка на задачу: [https://edabit.com/challenge/tYHkTdFrEmWfxpPKF](https://edabit.com/challenge/tYHkTdFrEmWfxpPKF)



### Тесты

Тесты находятся в test.js

```javascript
// Первый тест
test('Step 1 -> Matches 6', () => {
    expect(matchHouses(1)).toBe(6);
});

// Второй тест
test('Step 0 -> Matches 0', () => {
    expect(matchHouses(0)).toBe(0);
});

// Третий тест
test('Step 17 -> Matches 86', () => {
    expect(matchHouses(17)).toBe(86);
});

// Четвертый тест
test('Step 36 -> Matches 181', () => {
    expect(matchHouses(36)).toBe(181);
});

// Пятый тест
test('Step 15 -> Matches 76', () => {
    expect(matchHouses(15)).toBe(76);
});
```