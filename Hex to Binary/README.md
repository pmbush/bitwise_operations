## Перевод шестнадцатеричного кода в двоичный

Создайте функцию, которая принимает число HEX и возвращает его двоичный эквивалент (в виде строки).

### Примеры

```
toBinary(0xFF) ➞ "11111111"

toBinary(0xAA) ➞ "10101010"

toBinary(0xFA) ➞ "11111010"
```

### Примечания

Число всегда будет 8-битным.

Ссылка на задачу: [https://edabit.com/challenge/mHrFjP4K5BfAKEugN](https://edabit.com/challenge/mHrFjP4K5BfAKEugN)




### Тесты

Тесты находятся в test.js

```javascript
// Первый тест
test('0xFF to binnary = 11111111', () => {
    expect(toBinary(0xFF)).toBe('11111111');
});

// Второй тест
test('0xAA to binnary = 10101010', () => {
    expect(toBinary(0xAA)).toBe('10101010');
});

// Третий тест
test('0xFA to binnary = 11111010', () => {
    expect(toBinary(0xFA)).toBe('11111010');
});
```
