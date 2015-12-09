var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var Steps = require('./steps.jsx');

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

        <Steps todoId={this.props.item.id}/>
      </div>
    );
  }
});

module.exports = TodoDetailView;
