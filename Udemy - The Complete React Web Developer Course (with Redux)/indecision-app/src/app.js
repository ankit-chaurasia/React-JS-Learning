import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi, my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
console.log('oldSyntax.name' + oldSyntax.name);
console.log('oldSyntax.getGreeting()' + oldSyntax.getGreeting());
// but getGreeting binding can break if we do as below
const getGreeting = oldSyntax.getGreeting;
console.log("getGreeting() " + getGreeting());  // Will give error: name is not defined because this is no longer referring to OldSysntax class
// To fix 'this' reference errro we need to bind it in constructor

class NewSyntax {
    name = 'Jan';
    getGreeting = () => {
        // Because arrow function don't bind its this, so 'this' is always be referred to class
        return `Hi, my name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log('newSyntax.name: ' + newSyntax.name);
console.log('newGetGreeting(): ' + newGetGreeting());