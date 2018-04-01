class Person {
    // name = '';
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return 'Hi!!';
    }
    getDescripton() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Person('Ankit Chaurasia', 25);
console.log(me.getDescripton());