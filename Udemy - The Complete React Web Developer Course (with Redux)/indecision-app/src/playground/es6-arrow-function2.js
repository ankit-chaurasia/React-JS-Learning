const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(3, 4));
// arguments in arrow function
const addArow = (a, b) => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    return a + b;
};
console.log(addArow(3, 4));

const user = {
    name: "Ankit",
    cities: ['Jhansi', 'Hyderabad'],
    printPlacesLived: function () {
        // here this is bound to user object
        console.log(this.name); // Ankit
        console.log(this.cities); // ["Jhansi", "Hyderabad"]
        var that = this;
        this.cities.forEach(function (city) {
            // here this is no longer bound to user because it is an anonymous function
            // workaround: assigining this value in a variable and child function has access to its parent function
            console.log(that.name + " has lived in " + city);
        });
    }
};
user.printPlacesLived();

// In Arrow function this is bound to the enclosing context
const user2 = {
    name: "Ankit",
    cities: ['Jhansi', 'Hyderabad'],
    printPlacesLived: function () {
        // here this is bound to user object
        return this.cities.map((city)=> this.name + " has lived in " + city);
        // this.cities.forEach( (city) => {
        //     // here this is no longer bound to user because it is an anonymous function
        //     // workaround: assigining this value in a variable and child function has access to its parent function
        //     console.log(this.name + " has lived in " + city);
        // });
    }
};
user2.printPlacesLived();
console.log(user2.printPlacesLived());