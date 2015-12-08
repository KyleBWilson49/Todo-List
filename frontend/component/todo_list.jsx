var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');

var TodoList = React.createClass({
  getInitialState: function() {
    return ({
      items: TodoStore.all()
    });
  },

  todosChanged: function() {
    this.setState({
      items: TodoStore.all()
    });
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function() {
    var listItems = this.state.items.map(function(item, idx) {
      return (
        <TodoListItem key={idx} item={item}/>
      );
    });
    return (
      <div>
        {listItems}
      </div>
    );
  }
});

module.exports = TodoList;
