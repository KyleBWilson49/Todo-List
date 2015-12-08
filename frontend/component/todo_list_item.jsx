var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoListItem = React.createClass({
  handleDestroy: function() {
    TodoStore.destroy(this.props.item.id);
  },

  handleDone: function() {
    TodoStore.toggleDone(this.props.item.id);
  },

  render: function() {
    var doneButton;

    if (!this.props.item.done) {
      doneButton = (
          <button onClick={this.handleDone}>
            Done
          </button>
      );
    } else {
      doneButton = "";
    }

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
          {doneButton}
        </div>
      </div>
    );
  }
});

module.exports = TodoListItem;
