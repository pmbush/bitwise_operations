class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Метода класса Person сравнивающего возраст одной персоны с другой
    compareAge(otherPerson) {

        // Сравниваем возраст персон
        if (this.age > otherPerson.age) {

            return otherPerson.name + ' is younger than me.';

        } else if (this.age < otherPerson.age) {

            return otherPerson.name + ' is older than me.';

        } else {

            return otherPerson.name + ' is the same age as me.';

        }
    }
}

export default Person; // Экспортируем класс