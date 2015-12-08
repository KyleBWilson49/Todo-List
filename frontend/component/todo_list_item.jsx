var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoDetailView = require('./todo_detail_view.jsx');

var TodoListItem = React.createClass({
  getInitialState: function () {
    return { selected: false };
  },

  handleDone: function() {
    TodoStore.toggleDone(this.props.item.id);
  },

  handleReveal: function () {
    this.setState({ selected: !this.state.selected });
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
          <div onClick={this.handleReveal}>{this.props.item.title}</div>
          {doneButton}
        </div>
        { this.state.selected ? <TodoDetailView item={this.props.item}/> : "" }
        <br/>
      </div>
    );
  }
});

module.exports = TodoListItem;
