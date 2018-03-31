"use strict";

console.log("app.js is running");

// JSX - JavaScript XML
// var template = React.createElement(
//     "h1",
//     {"id": "someid"},
//     "Hello World!!"
// );
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "This is JSX from app.js Does this change"
    ),
    React.createElement(
        "h2",
        null,
        "This is some info"
    )
);
function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}
var user = {
    userName: "Ankit Chaurasia",
    userAge: 26,
    location: "Hyderabad"
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName ? user.userName : 'Anonymous'
    ),
    user.userAge && user.userAge >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.userAge
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
