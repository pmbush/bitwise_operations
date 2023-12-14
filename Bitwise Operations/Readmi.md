## Задача: побитовые операции

Десятичное число можно представить в виде последовательности битов. Для примера:

```
6 = 00000110
23 = 00010111
```

Исходя из побитового представления чисел, мы можем вычислить побитовое И, побитовое ИЛИ и побитовое исключающее ИЛИ. Используя приведенный выше пример:

```
bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
```

Напишите три функции для вычисления побитового И, побитового ИЛИ и побитового исключающее ИЛИ двух чисел.

### Тесты

Тесты находяться в test.js
Запускаются из консоли про помощи команды npm jest

```javascript
// Перввый тест
test('bitwise 7 OR 12 to equal 15', () => {
    expect(bitwiseOR(7, 12)).toBe(15);
});

test('bitwise 7 XOR 12 to equal 11', () => {
    expect(bitwiseXOR(7, 12)).toBe(11);
});


// Второй тест
test('bitwise 32 AND 17 to equal 4', () => {
    expect(bitwiseAND(32, 17)).toBe(0);
});

test('bitwise 32 OR 17 to equal 15', () => {
    expect(bitwiseOR(32, 17)).toBe(49);
});

test('bitwise 32 XOR 17 to equal 11', () => {
    expect(bitwiseXOR(32, 17)).toBe(49);
});

// Третий тест
test('bitwise 13 AND 19 to equal 1', () => {
    expect(bitwiseAND(13, 19)).toBe(1);
});

test('bitwise 13 OR 19 to equal 31', () => {
    expect(bitwiseOR(13, 19)).toBe(31);
});

test('bitwise 13 XOR 19 to equal 30', () => {
```