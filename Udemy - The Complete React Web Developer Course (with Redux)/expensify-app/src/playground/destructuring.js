const person = {
  name: "Ankit",
  age: 26,
  location: {
    city: "Hyderabad",
    temp: 92
  }
};

// const name = person.name;
// const age = person.age;

// ES6 destructuring
// Renaming name to firstName and setting default value
const { name: firstName = "defalt name", age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp: temprature } = person.location;

console.log(`It's ${temprature} in ${city}`);
