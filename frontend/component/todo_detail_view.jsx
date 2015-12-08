var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoDetailView = React.createClass({
  handleDestroy: function() {
    TodoStore.destroy(this.props.item.id);
  },

  render: function () {
    return (
      <div>
        {this.props.item.body}
        <button onClick={this.handleDestroy}>
          Delete
        </button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
