import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from webpack.</p>;
// Here we don't have support for JSX
// const template = React.createElement("p", {}, 'testing');

ReactDOM.render(template, document.getElementById('app'));