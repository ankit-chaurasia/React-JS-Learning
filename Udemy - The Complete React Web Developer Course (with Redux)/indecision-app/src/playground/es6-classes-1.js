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

class Student extends Person {
    constructor(name, age, major = 'Information Technology') {
        super(name, age); // Before this parent constructor should be called
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
    getDescripton() {
        let descripton = super.getDescripton();
        if (this.hasMajor()) {
            descripton += ` Their major is ${this.major}`;
        }
        return descripton;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Person('Ankit Chaurasia', 25);
console.log(me.getDescripton());

const other = new Student('Student', 22, 'Computer Science');
console.log(other.getDescripton());

const someOne = new Traveler("Traveler", 30, 'Hyderebad');
console.log(someOne.getGreeting());