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
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
