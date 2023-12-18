import Person from "./Person"; // Импортируем класс Person

// Создаем экземпляры класса
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);


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