import matchHouses from "./function" // Имппорт функции 

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