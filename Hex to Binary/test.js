import toBinary from "./function"; // импорт функции

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