import sortByLength from "./function"; // Импортируем функцию

// Массив до и после обработки для первого теста
const array1 = ["a", "ccc", "dddd", "bb"];
const sorted1 = ["a", "bb", "ccc", "dddd"];


// Массив до и после обработки для второго теста
const array2 = ["may", "april", "september", "august"];
const sorted2 = ["may", "april", "august", "september"];

// Массив до и после обработки для третьего теста
const array3 = ["maybe"];
const sorted3 = ["maybe"];


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









/*
Test.assertSimilar(sortByLength(["apple", "pie", "shortcake"]), ["pie", "apple", "shortcake"])
Test.assertSimilar(sortByLength(["may", "april", "september", "august"]), ["may", "april", "august", "september"])
Test.assertSimilar(sortByLength(["maybe"]), ["maybe"])
Test.assertSimilar(sortByLength([]), []) */