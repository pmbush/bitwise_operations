import { sortDrinkByByble, sortDrinkByPrice } from "./functions";


const drinks1 = [
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 },
    { name: 'peach', price: 23 }
];

const sorted1 = [
    { name: 'peach', price: 23 },
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 }
];

const drinks2 = [
    { name: 'water', price: 120 },
    { name: 'lime', price: 80 },
    { name: 'peach', price: 90 }
];

const sorted2 = [
    { name: 'lime', price: 80 },
    { name: 'peach', price: 90 },
    { name: 'water', price: 120 }
];


// Первый тест
test('sortDrinkByPrice drinks1 = sorted1', () => {
    expect(sortDrinkByPrice(drinks1)).toStrictEqual(sorted1);
});

test('sortDrinkByByble drinks1 = sorted1', () => {
    expect(sortDrinkByByble(drinks1)).toStrictEqual(sorted1);
});


// Второй тест
test('sortDrinkByPrice drinks1 = sorted1', () => {
    expect(sortDrinkByPrice(drinks2)).toStrictEqual(sorted2);
});

test('sortDrinkByByble drinks1 = sorted1', () => {
    expect(sortDrinkByByble(drinks2)).toStrictEqual(sorted2);
});