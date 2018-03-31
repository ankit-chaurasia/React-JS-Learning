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

var userName = "Ankit Chaurasia";
var userAge = 26;
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName + "!!"
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        userAge
    ),
    React.createElement(
        "p",
        null,
        "Location: Hyderabad"
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
