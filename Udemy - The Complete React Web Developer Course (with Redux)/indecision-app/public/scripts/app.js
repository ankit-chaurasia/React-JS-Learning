"use strict";

var userName = "Ankit Chaurasia";
var userAge = 26;
var app = {
    title: "Indecision App",
    subtitle: "Put yourself in the hands of a computer",
    options: ["One", 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // Stop full page refresh on submitting form
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        rerenderForm();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    rerenderForm();
};

var onMakeDecision = function onMakeDecision() {
    var randonNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randonNum];
    alert(option);
};

var appRoot = document.getElementById('app');
var number = [44, 55, 66];
var rerenderForm = function rerenderForm() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            "button",
            { onClick: onMakeDecision, disabled: !app.options.length },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
rerenderForm();
