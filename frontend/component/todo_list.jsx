var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');
var TodoForm = require('./todo_form.jsx');

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
        <TodoListItem key={item.id} item={item}/>
      );
    });
    return (
      <div>
        <div className="row">
          <div className="col-xs-4">
            {listItems}
            <br/>
            <TodoForm/>
          </div>
          <div className="col-xs-8">
            
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoList;
