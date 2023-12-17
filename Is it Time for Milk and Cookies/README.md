## Пришло время для молока и печенья

Канун Рождества уже почти наступил, поэтому, естественно, нам нужно приготовить молоко и печенье для Санты! Создайте функцию, которая принимает объект Date и возвращает true, если это канун Рождества (24 декабря), и false в противном случае. Имейте в виду, что в JavaScript дата-месяц основана на 0, то есть декабрь - это 11-й месяц, а январь - 0-й.


```
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
```

### Примечания

Даты основаны на нулях (см. ресурсы).
Все тестовые примеры содержат действительные даты.

Ссылка на задачу: [https://edabit.com/challenge/hPWnaSckJke5FXNEH](https://edabit.com/challenge/hPWnaSckJke5FXNEH)



### Тесты

Тесты находятся в test.js

```javascript
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
```