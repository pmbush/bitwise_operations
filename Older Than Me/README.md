## Старше меня

Создайте метод в классе Person, который возвращает сравнение возраста другого человека. Учитывая экземпляры p1, p2 и p3, которые будут инициализированы атрибутами name и age, верните предложение в следующем формате:

{имя другого человека} старше / моложе / того же возраста, что и} я.

### Примеры

```
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
```

```
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
```

### Примечания

Ознакомьтесь с вкладкой "Ресурсы", чтобы найти полезные учебные пособия по классам JavaScript!
Если вы действительно застряли, загляните на вкладку "Решения", чтобы найти ответы.

Ссылка на задачу: [https://edabit.com/challenge/iwdZiFucR5wkQsFHu](https://edabit.com/challenge/iwdZiFucR5wkQsFHu)


### Тесты

Тесты находятся в test.js

```javascript
// Первый тест
test('Joel is older than me.', () => {
    expect(p1.compareAge(p2)).toBe('Joel is older than me.');
});


// Второй тест
test('Lily is the same age as me.', () => {
    expect(p1.compareAge(p3)).toBe('Lily is the same age as me.');
});


// Третий тест
test('Samuel is younger than me.', () => {
    expect(p2.compareAge(p1)).toBe('Samuel is younger than me.');
});

// Четвертый тест
test('Lily is younger than me.', () => {
    expect(p2.compareAge(p3)).toBe('Lily is younger than me.');
});


// Пятый тест
test('Samuel is the same age as me.', () => {
    expect(p3.compareAge(p1)).toBe('Samuel is the same age as me.');
});

// Шестой тест
test('Joel is older than me.', () => {
    expect(p3.compareAge(p2)).toBe('Joel is older than me.');
});

```
