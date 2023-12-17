import timeForMilkAndCookies from "./function" // Импорт функции

// Первый тест
test('timeForMilkAndCookies(new Date(2013, 11, 24)) is true?', () => {
    expect(timeForMilkAndCookies(new Date(2013, 11, 24))).toStrictEqual(true);
});

// Второй тест
test('timeForMilkAndCookies(new Date(3000, 11, 24)) is true?', () => {
    expect(timeForMilkAndCookies(new Date(3000, 11, 24))).toStrictEqual(true);
});


// Третий тест
test('timeForMilkAndCookies(new Date(2154, 11, 11)) is true?', () => {
    expect(timeForMilkAndCookies(new Date(2154, 11, 11))).toStrictEqual(false);
});


// Четвертый тест
test('timeForMilkAndCookies(new Date(2010, 11, 2)) is true?', () => {
    expect(timeForMilkAndCookies(new Date(2010, 11, 2))).toStrictEqual(false);
});

// Пятый тест
test('timeForMilkAndCookies(new Date(1980, 9, 24)) is true?', () => {
    expect(timeForMilkAndCookies(new Date(1980, 9, 24))).toStrictEqual(false);
});