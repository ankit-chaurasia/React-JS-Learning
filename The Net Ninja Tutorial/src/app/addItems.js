var React = require('react');

/**
 * React Tutorial #10 Input Refs
 */

// Import css for this component
require('./css/addItems.css');

// Create TodoItem Component
var AddItems = React.createClass({
    render: function () {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="hit me"/>
            </form>
        );
    },
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItems;