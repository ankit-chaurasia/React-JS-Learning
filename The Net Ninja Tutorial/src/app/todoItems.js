var React = require('react');

/**
 * React Tutorial #9 Modularizing Code
 */

// Import css for this component
require('./css/todoitems.css');

// Create TodoItem Component
var TodoItems = React.createClass({
    render: function () {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> X</span>
                </div>
            </li>
        );
    },
    handleDelete: function () {
        // We will send from this component to parent component
        this.props.onDelete(this.props.item);
    }
});

module.exports = TodoItems;