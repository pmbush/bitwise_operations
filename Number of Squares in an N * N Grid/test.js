// Импортируем функцию numberSquares 
import numberSquares from "./function";

// Первый тест
test('На вход принимаем число 3, результат 10', () => {
    expect(numberSquares(3)).toBe(14);
});

// Второй тест
test('На вход принимаем число 10, результат 385', () => {
    expect(numberSquares(10)).toBe(385);
});

// Третий тест
test('На вход принимаем число 15, результат 1240', () => {
    expect(numberSquares(15)).toBe(1240);
});