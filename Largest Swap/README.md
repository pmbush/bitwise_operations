## Крупнейший своп

Напишите функцию, которая принимает двузначное число и определяет, является ли оно наибольшим из двух возможных замен цифр.


```
largestSwap(27) ➞ false

largestSwap(43) ➞ true
```

Если в качестве входных данных используется 27, мы должны вернуть false, потому что, поменяв местами цифры, мы получим 72, а 72 > 27. С другой стороны, поменяв местами 43, мы получим 34, а 43 > 34.


### Примеры

```
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true
```

### Примечания

Числа с двумя одинаковыми цифрами (третий пример) должны давать true (лучше не придумаешь).

Ссылка на задачу: [https://edabit.com/challenge/hD3euqPHM82Cbr7R8](https://edabit.com/challenge/hD3euqPHM82Cbr7R8)


### Тесты

Тесты находятся в test.js

```javascript
// Первый тест
test('23 >= 32 = false', () => {
    expect(largestSwap(23)).toBe(false);
});

// Втоорой тест
test('54 >= 45 = true', () => {
    expect(largestSwap(54)).toBe(true);
});

// Третий тест
test('77 > 77 = true', () => {
    expect(largestSwap(77)).toBe(true);
});
```
