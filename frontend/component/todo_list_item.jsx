var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoListItem = React.createClass({
  handleDestroy: function() {
    TodoStore.destroy(this.props.item.id);
  },
  render: function() {
    return (
      <div>
        <div>
          {this.props.item.title}
          <button onClick={this.handleDestroy}>
            Delete
          </button>
        </div>
        <div>
          {this.props.item.body}
        </div>
      </div>
    );
  }
});

module.exports = TodoListItem;
